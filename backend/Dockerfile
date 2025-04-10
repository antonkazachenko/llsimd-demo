
FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /code

RUN apt-get update && apt-get install -y \
    wget \
    lsb-release \
    software-properties-common \
    gnupg \
    && rm -rf /var/lib/apt/lists/*

RUN wget https://apt.llvm.org/llvm.sh && \
    chmod +x llvm.sh && \
    ./llvm.sh 20 && \
    rm llvm.sh

RUN apt-get update && apt-get install -y \
    clang-20 \
    llvm-20 \
    git \
    build-essential \
    cmake \
    gcc-multilib \
    && rm -rf /var/lib/apt/lists/*

RUN ln -s /usr/bin/clang-20 /usr/local/bin/clang && \
    ln -s /usr/bin/opt-20 /usr/local/bin/opt && \
    ln -s /usr/bin/llvm-as-20 /usr/local/bin/llvm-as


COPY requirements.txt /code/
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY ../CMPT479 /code/

RUN chmod +x /code/llvm_tools/llsimd.sh

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
