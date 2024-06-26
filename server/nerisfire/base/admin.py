from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Member, Organization


class MemberAdmin(UserAdmin):
    model = Member
    list_display = ['username', 'email', 'is_staff', 'is_active', 'organization']
    list_filter = ['is_staff', 'is_active', 'organization']
    fieldsets = UserAdmin.fieldsets + (
        ('Organization', {'fields': ('organization',)}),
    )

admin.site.register(Member, MemberAdmin)
admin.site.register(Organization)
