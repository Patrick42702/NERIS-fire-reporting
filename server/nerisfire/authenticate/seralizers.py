from rest_framework import serializers
from base.models import Member, Statement

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ["id", "email", "password", "first_name", "last_name", "phone"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        member = Member.objects.create_user(
            **validated_data
        )
        return member

# class RoleSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Role
#         fields = ["name", "organization"]
#
# class OrganizationRoleSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = OrganizationRole
#         fields = ['organization', 'role', 'user']
#
# class StatementSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Statement
#         fields = ["principal", "action", "effect", "condition", "condition_expression"]
