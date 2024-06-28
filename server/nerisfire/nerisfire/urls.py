from django.urls import include, path
from rest_framework import routers
from authenticate.views import CreateMemberView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/', include("authenticate.urls")),
    path('api/', include("api.urls")),
    path('/api/member/register', CreateMemberView.as_view(), name="register"),
    path('/api/token', TokenObtainPairView.as_view(), name="get_token"),
    path('/api/token/refresh', TokenRefreshView.as_view(), name="refresh"),
]
