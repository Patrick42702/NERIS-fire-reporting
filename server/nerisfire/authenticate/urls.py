from django.urls import path, include
from django.contrib import admin
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('member/register', CreateMemberView.as_view(), name="register"),

    path('token', TokenObtainPairView.as_view(), name="get_token"),
    path('token/refresh', TokenRefreshView.as_view(), name="refresh"),

    # path('role/create', CreateRoleView.as_view(), name="create role"),
    # path('role', ListRoleView.as_view(), name="get roles"),
    #
    # path('organization-roles', OrganizationRoleListView.as_view(), name='organization-role-list'),
    # path('organization-roles/create', OrganizationRoleCreateView.as_view(), name='organization-role-create'),
]
