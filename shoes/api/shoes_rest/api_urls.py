from django.urls import path
from . import views

urlpatterns = [
    path('shoes/', views.api_list_shoes, name='api_list_shoes'),
    path('shoes/<int:bin_vo_id>/', views.api_list_shoes, name='api_list_shoes_by_bin'),
    path('shoe/<int:pk>/', views.api_show_shoe, name='api_show_shoe'),
]
