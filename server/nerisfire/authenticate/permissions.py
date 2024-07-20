from rest_access_policy import AccessPolicy
import logging

logger = logging.getLogger('api')
class OrganizationAccessPolicy(AccessPolicy):
    statements = [
        {
            "action": ["create"],
            "principal": ["role:admin"],
            "effect": "deny"
        },
        {
            "action": ["list", "retrieve"],
            "principal": ["role:admin"],
            "effect": "allow"
        },
        {
            "action": ["update", "partial_update"],
            "principal": ["role:editor"],
            "effect": "allow"
        },
        {
            "action": ["destroy"],
            "principal": ["role:admin"],
            "effect": "allow"
        }
    ]

    def get_principal(self, request):
        # Assuming the user has only one role per organization for simplicity
        logger.debug("calling the get_principal function")
        organization_role = OrganizationRole.objects.filter(user=request.user, organization=request.organization).first()
        if organization_role:
            logger.debug("found the organization role")
            return f"role:{organization_role.role.name.lower()}"
        return None

    def scope_queryset(self, request, queryset):
        # Filter organizations based on the user's roles
        logger.debug("calling scope queryset")
        return queryset.filter(organizationrole__user=request.user)

