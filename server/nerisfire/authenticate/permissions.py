from rest_access_policy import AccessPolicy
from rest_framework import permissions
from base.models import OrganizationRole
import logging
from typing import *

logger = logging.getLogger('api')
class OrganizationAccessPolicy(AccessPolicy):
    def get_user_group_values(self, user) -> List[str]:
        user_roles = OrganizationRole.get_organization_roles_by_user(user.id)
        logger.debug(user_roles)
        return list(user_roles)

    group_prefix = "role:"

    statements = [
        {
            "action": ["CreateOrganizationView"],
            "principal": ["*"],
            "effect": "allow"
        },
        {
            "action": ["ListOrganizationView"],
            "principal": ["*"],
            "effect": "allow"
        },
        {
            "action": ["ListOrganizationView"],
            "principal": ["admin"],
            "effect": "allow"
        },
        {
            "action": ["update", "partial_update"],
            "principal": ["*"],
            "effect": "allow"
        },
        {
            "action": ["destroy"],
            "principal": ["*"],
            "effect": "allow"
        }
    ]

