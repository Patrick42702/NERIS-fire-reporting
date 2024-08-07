from rest_access_policy import AccessPolicy, Statement
from rest_framework import permissions
# from base.models import OrganizationRole
# import logging
# from typing import *
#
# logger = logging.getLogger('api')
# class OrganizationAccessPolicy(AccessPolicy):
#     def get_user_group_values(self, user) -> List[str]:
#         user_roles = OrganizationRole.get_organization_roles_by_user(user.id)
#         role_list = [str(obj.role) for obj in user_roles]
#         logger.debug(f"these are the user roles of this user: {role_list}")
#         return list(role_list)
#
#     group_prefix = "role:"
#
#     statements = [
#         {
#             "action": ["CreateOrganizationView"],
#             "principal": ["*"],
#             "effect": "allow"
#         },
#         {
#             "action": ["ListOrganizationView"],
#             "principal": ["role:company_admin"],
#             "effect": "allow"
#         },
#         {
#             "action": ["update", "partial_update"],
#             "principal": ["*"],
#             "effect": "allow"
#         },
#         {
#             "action": ["destroy"],
#             "principal": ["*"],
#             "effect": "allow"
#         }
#     ]
#
