from django.contrib.auth.models import Group, User
from rest_framework.decorators import action, permission_classes
from rest_framework.response import Response
from rest_framework import permissions, viewsets
from rest_framework.decorators import api_view
from base import models
from .serializers import OrganizationSerializer

# class MemberViewSet(viewsets.ModelViewSet):
#     queryset = Member.objects.all().order_by('last_name')
#     serializer_class = MemberSerializer
#
#     @action(detail=False, methods=['get'], url_path='patrick')
#     def get_patrick_member(self, request):
#         # Retrieve the member where first_name is "patrick"
#         patrick_member = Member.objects.filter(first_name='patrick').first()
#
#         if patrick_member:
#             serializer = self.get_serializer(patrick_member)
#             return Response(serializer.data)
#         else:
#             return Response({"message": "Patrick not found"}, status=404)
#
#     @action(detail=False, methods=['post'], url_path='remove')
#     def remove_member(self, request):
#         data = request.data.get('name')
#
#         if not data:
#             return Response({'error': 'Name not provided'}, status=400)
#
#         # Remove records with the provided name from the database
#         removed_count, _ = Member.objects.filter(name=data).delete()
#
#         return Response({'message': f'{removed_count} records removed'}, status=200)


# views for getting statistics for member calls

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def getOrganizations(request):
    orgs = models.Organization.objects.all()
    serializer = OrganizationSerializer(orgs, many=True)
    return Response(serializer.data)








