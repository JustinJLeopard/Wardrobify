"""hats_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from hats_rest.views import api_list_hats

urlpatterns = [
    path('admin/', admin.site.urls),
    path(
        "locations/<int:location_vo_id>/hats/",
        api_list_hats,
        name="api_list_hats",
    ),
    # path("hats/<int:pk>/", api_show_hat, name="api_show_hats"),
]
