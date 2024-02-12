from django.urls import path
from .views import ItemListAPIView
from rest_framework.authtoken.views import obtain_auth_token
#Authentication
urlpatterns = [
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    path('items/', ItemListAPIView.as_view(), name='item-list'),
]


