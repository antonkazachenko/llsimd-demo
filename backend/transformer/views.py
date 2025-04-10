import os
import tempfile
import subprocess
import json
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def transform_code(request):
    if request.method != 'POST':
        return HttpResponseBadRequest("Only POST allowed")

    try:
        body = json.loads(request.body.decode())
        code = body.get('code')
        if not code:
            return HttpResponseBadRequest("Missing code")
    except Exception as e:
        return HttpResponseBadRequest("Invalid JSON")

    with tempfile.TemporaryDirectory() as temp_dir:
        in_c_path = os.path.join(temp_dir, 'in.c')
        in_ll_path = os.path.join(temp_dir, 'in.ll')
        out_ll_path = os.path.join(temp_dir, 'in.out.ll')
        out_bc_path = os.path.join(temp_dir, 'in.out.bc')
        exe_path = os.path.join(temp_dir, 'in')

        with open(in_c_path, 'w') as f:
            f.write(code)

        clang_cmd = [
            'clang',
            '--target=x86_64-unknown-linux-gnu',
            '-S',
            '-emit-llvm',
            in_c_path,
            '-o',
            in_ll_path
        ]
        clang_proc = subprocess.run(clang_cmd, capture_output=True, text=True)
        if clang_proc.returncode != 0:
            return JsonResponse({'error': 'Clang error', 'details': clang_proc.stderr}, status=500)

        BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        shared_lib_path = os.path.join(BASE_DIR, 'llvm_tools', 'libllsimd.so')
        if os.path.exists(shared_lib_path):
            opt_cmd = [
                'opt',
                '-load-pass-plugin', shared_lib_path,
                '-passes=llsimd',
                '-S',
                in_ll_path,
                '-o',
                out_ll_path
            ]
        else:
            opt_cmd = ['cp', in_ll_path, out_ll_path]

        opt_proc = subprocess.run(opt_cmd, capture_output=True, text=True)
        if opt_proc.returncode != 0:
            return JsonResponse({'error': 'Opt error', 'details': opt_proc.stderr}, status=500)

        llvm_as_cmd = ['llvm-as', out_ll_path, '-o', out_bc_path]
        llvm_as_proc = subprocess.run(llvm_as_cmd, capture_output=True, text=True)
        if llvm_as_proc.returncode != 0:
            return JsonResponse({'error': 'llvm-as error', 'details': llvm_as_proc.stderr}, status=500)

        clang_exe_cmd = ['clang', out_bc_path, '-o', exe_path]
        clang_exe_proc = subprocess.run(clang_exe_cmd, capture_output=True, text=True)
        if clang_exe_proc.returncode != 0:
            return JsonResponse({'error': 'Clang link error', 'details': clang_exe_proc.stderr}, status=500)

        with open(in_ll_path, 'r') as f:
            originalIR = f.read()
        with open(out_ll_path, 'r') as f:
            transformedIR = f.read()

    return JsonResponse({'llvmIR': originalIR, 'transformedOutput': transformedIR})
