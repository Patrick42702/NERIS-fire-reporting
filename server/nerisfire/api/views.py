# from django.db.models import Q
# from rest_framework.response import Response
# from rest_framework import permissions, viewsets, generics
# from base.models import Organization, StatusHistory
# from .serializers import OrganizationSerializer, StatusHistorySeralizer
# from datetime import datetime
# import logging
#
# logger = logging.getLogger('authenticate')
#
# # POST request -> creates new org
# class CreateOrganizationView(generics.CreateAPIView):
#     queryset = Organization.objects.all()
#     serializer_class = OrganizationSerializer
#     permission_classes = [permissions.IsAuthenticated]
#
# # GET request -> list of all orgs
# class ListOrganizationView(generics.ListAPIView):
#     queryset = Organization.objects.all()
#     serializer_class = OrganizationSerializer
#     permission_classes = [permissions.IsAuthenticated]
#
#     # GETs all organizations that contain the queried string (if any)
#     def get_queryset(self):
#         queryset = Organization.objects.all()
#         dept_name = self.request.query_params.get('dept_name', None)
#
#         if dept_name:
#             queryset = queryset.filter(dept_name__icontains=dept_name)
#
#         return queryset
#
# # GET request -> retrieves a single org by its ID
# class RetrieveOrganizationView(generics.RetrieveAPIView):
#     queryset = Organization.objects.all()
#     serializer_class = OrganizationSerializer
#     permission_classes = [permissions.IsAuthenticated]
#
# class StatusHistoryView(generics.ListAPIView):
#     queryset = StatusHistory.objects.all()
#     serializer_class = StatusHistorySeralizer
#     permission_classes = [permissions.IsAuthenticated]
#     ordering_fields = ['id']  # Fields that can be ordered
#     ordering = ['id']  # Default ordering
#
#     def get_queryset(self):
#         queryset = StatusHistory.objects.all()
#         logger.debug("Calling the queryset function for status ranges")
#         user_bool = self.request.query_params.get('user_bool', None)
#         if user_bool:
#             user = self.request.user
#             queryset = StatusHistory.objects.filter(user=user)
#
#         start_date = self.request.query_params.get('start_date', None)
#         if start_date:
#             # assume start_date passed in as appropriate format string
#             try:
#                 dt = datetime.strptime(start_date, '%Y-%m-%d')
#                 queryset = StatusHistory.objects.filter(Q(start_date__gt=dt))
#             except ValueError as e:
#                 return Response(f"Error: {e}", 400)
#
#         end_date = self.request.query_params.get('end_date', None)
#         if end_date:
#             # assume end_date passed in as appropriate format string
#             try:
#                 dt = datetime.strptime(end_date, '%Y-%m-%d')
#                 queryset = StatusHistory.objects.filter(Q(end_date__lt=dt))
#             except ValueError as e:
#                 return Response(f"Error: {e}", 400)
#
#         return queryset
#
# class CreateStatusHistoryView(generics.CreateAPIView):
#     queryset = StatusHistory.objects.all()
#     serializer_class = StatusHistorySeralizer
#     permission_classes = [permissions.IsAuthenticated]
#     ordering_fields = ['id']  # Fields that can be ordered
#     ordering = ['id']  # Default ordering
#
# class EditStatusHistoryView(generics.UpdateAPIView):
#     queryset = StatusHistory.objects.all()
#     serializer_class = StatusHistorySeralizer
#     permission_classes = [permissions.IsAuthenticated]
#
#
#
#
# GETs, PUTs, and/or DELETEs a single org by its ID
# class RetrieveUpdateDestroyOrganizationView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Organization.objects.all()
#     serializer_class = OrganizationSerializer
#     permission_classes = [permissions.IsAuthenticated]
