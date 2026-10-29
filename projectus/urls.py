from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('view/<int:id>/', views.post_view, name='post_view'),
    path('register/', views.register, name='register'),
    path('profile/', views.profile, name='profile'),

     # Rota para criar um post
    path('posts/new/', views.create_post, name='create_post'),

   
]
