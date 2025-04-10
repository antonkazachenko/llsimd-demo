from django.urls import path
from .views import transform_code

urlpatterns = [
    path('submit/', transform_code, name='transform_code'),
]
