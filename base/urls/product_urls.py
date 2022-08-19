from django.urls import path 
from base.views import product_views as views

urlpatterns = [
    path('', views.getProducts, name='products'),
    path('create/', views.createProduct, name='product-create'),
    path('upload/', views.uploadImage, name='product-upload-image'),
    path('<str:pk>/reviews/', views.createProductReview, name='product-review'),
    path('top/', views.getTopProducts, name='products-top'),
    path('<str:pk>/', views.getProduct, name='product'),
    path('delete/<str:pk>/', views.deleteProduct, name='product-delete'),
    path('update/<str:pk>/', views.updateProduct, name='product-update'),
]