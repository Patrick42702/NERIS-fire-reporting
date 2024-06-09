from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Member
from django.contrib.auth.models import Group, User

class MemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Member
        fields = ["url", "first_name", "last_name", "date_of_birth"]

class UserSerializer(serializers.HyperlinkedModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[
            UniqueValidator(queryset=User.objects.all())
        ]
    )
    class Meta:
        model = User
        fields = ['url', 'username', 'password', 'email', 'groups']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)

        password = validated_data.get('password', None)
        if password:
            instance.set_password(password)
        instance.save()
        return instance

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']
