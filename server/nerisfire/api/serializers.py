from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import Group, User
from base import models


# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     email = serializers.EmailField(
#         required=True,
#         validators=[
#             UniqueValidator(queryset=User.objects.all())
#         ]
#     )
#     class Meta:
#         model = User
#         fields = __all__
#         extra_kwargs = {
#             'password': {'write_only': True},
#         }
#
#     def create(self, validated_data):
#         user = User(
#             username=validated_data['username'],
#             email=validated_data['email'],
#         )
#         user.set_password(validated_data['password'])
#         user.save()
#         return user
#
#     def update(self, instance, validated_data):
#         instance.username = validated_data.get('username', instance.username)
#         instance.email = validated_data.get('email', instance.email)
#
#         password = validated_data.get('password', None)
#         if password:
#             instance.set_password(password)
#         instance.save()
#         return instance
#

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['email', 'username']
#
class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Organization
        fields = ['location', 'dept_name', 'verified']

# class IncidentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.Incident
#         fields = ['activity ','account ,','station','shift','incident_type', 'number', 'hours']










