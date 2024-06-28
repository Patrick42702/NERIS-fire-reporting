from base.models import Member
#from rest_framework import serializers
from rest_framework import generics
from .seralizers import MemberSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
import logging

logger = logging.getLogger('authenticate')  # Use the same logger name as defined in settings

# Create views here

class CreateMemberView(generics.CreateAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = [AllowAny]

# class RegisterUserView(APIView):
#     permission_classes = [AllowAny]
#
#     def post(self, request, *args, **kwargs):
#         serializer = RegisterSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
# class LoginView(APIView):
#     permission_classes = [AllowAny]
#
#     def post(self, request, *args, **kwargs):
#         email = request.data.get('email')
#         password = request.data.get('password')
#         user = authenticate(request, email=email, password=password)
#         if user is not None:
#             login(request, user)
#             return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
#         return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
#
# class LogoutView(APIView):
#     permission_classes = [IsAuthenticated]
#
#     def post(self, request, *args, **kwargs):
#         logger.debug(f'this is the request: {request}')
#         logout(request)
#         return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)
#

