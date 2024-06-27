from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Member, Organization


class MemberAdmin(UserAdmin):
    model = Member
    list_display = ['email', 'first_name', 'last_name', 'is_staff', 'date_joined']
    list_filter = ['is_staff', 'is_active']
    search_fields = ['email', 'first_name', 'last_name']
    ordering = ['email']
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'phone')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
        ('Important dates', {'fields': [('last_login')]}),
        ('Organization', {'fields': ['organization']})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'phone', 'password1', 'password2', 'is_active', 'is_staff', 'is_superuser')}
        ),
    )

    readonly_fields = ('last_login',)  # Ensure date_joined is not editable

admin.site.register(Member, MemberAdmin)
admin.site.register(Organization)
