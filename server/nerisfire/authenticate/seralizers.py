from rest_framework import serializers
from base.models import Member

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
