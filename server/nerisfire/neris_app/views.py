from django.contrib.auth.models import Group, User
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import permissions, viewsets
from .models import Member
from .serializers import MemberSerializer

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

    @action(detail=False, methods=['get'], url_path='patrick')
    def get_patrick_member(self, request):
        # Retrieve the member where first_name is "patrick"
        patrick_member = Member.objects.filter(first_name='patrick').first()

        if patrick_member:
            serializer = self.get_serializer(patrick_member)
            return Response(serializer.data)
        else:
            return Response({"message": "Patrick not found"}, status=404)

    @action(detail=False, methods=['post'], url_path='remove')
    def remove_member(self, request):
        data = request.data.get('name')

        if not data:
            return Response({'error': 'Name not provided'}, status=400)

        # Remove records with the provided name from the database
        removed_count, _ = YourModel.objects.filter(name=data).delete()

        return Response({'message': f'{removed_count} records removed'}, status=200)
