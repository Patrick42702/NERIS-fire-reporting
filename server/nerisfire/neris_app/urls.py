# urls.py in your app (neris_app)
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import YourModelViewSet

router = DefaultRouter()
router.register(r'your-model', YourModelViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
