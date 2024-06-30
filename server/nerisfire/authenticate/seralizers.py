from rest_framework import serializers
from base.models import Member

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ["id", "email", "password", "first_name", "last_name", "phone", "organization"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        member = Member.objects.create_user(
            first_name = validated_data.get('fname'),
            last_name = validated_data.get('lname'),
            **validated_data
        )
        return member

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Member
        fields = ['email', 'password', 'first_name', 'last_name', 'phone', 'username']

    def create(self, validated_data):
        user = Member.objects.create_user(
            email=validated_data.get('email'),
            password=validated_data.get('password'),
            first_name=validated_data.get('fname'),
            last_name=validated_data.get('lname'),
            phone=validated_data.get('phone'),
            username=email,
        )
        return user
