from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import uuid
from django.conf import settings

class MemberManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class Member(AbstractBaseUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    phone = models.CharField(max_length=15, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    member_id = models.CharField(max_length=50, blank=True, null=True)
    current_status = models.CharField(max_length=30, null=True, default=None)

    # Add fields for groups and user permissions
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to.',
        related_name='user_set',
        related_query_name='user',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name='user_set',
        related_query_name='user',
    )

    objects = MemberManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        # Simplest possible answer: Yes, always
        return True


class Organization(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    dept_name = models.CharField(max_length=255, default="")
    dept_phone = models.CharField(max_length=100, default="")
    admin_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, related_name="organization", null=True)
    location = models.CharField(max_length=255, blank=True)
    fdid = models.IntegerField(null=True, blank=True)
    verified = models.BooleanField(default=False, null=False)

    def create_org(self, dept_name, dept_phone, admin_id, **validated_data):
        self.dept_name = dept_name
        self.dept_phone = dept_phone
        self.admin_id = admin_id


        for attr, value in validated_data.items():
            setattr(self, attr, value)

        self.save()

    def __str__(self):
        return self.dept_name

class StatusRanges(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="status_ranges")
    start_date = models.DateField()
    end_date = models.DateField()
    duration = models.DurationField()
    status = models.CharField(max_length=100, default="temp", null=True)

    def __str__(self):
        return f'STATUS: {status}, START_DATE: {start_date}, END_DATE: {end_date}, DURATION: {duration}'

# class Activity(models.Model):
#     activity_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#     activity_type = models.CharField(max_length=255, null=False)
#     activity_date = models.DateTimeField(null=False)
#
#     def __str__(self):
#         return self.activity_type
#
#     class Meta:
#         abstract = True
#
# class Incident(models.Model):
#     activity = models.OneToOneField(Activity, on_delete=models.CASCADE)
#     account = models.CharField(max_length=255)
#     station = models.IntegerField()
#     shift = models.CharField(max_length=255) # Assumed CharField
#     alarm_dt = models.CharField(max_length=255) # Assumed CharField
#     incident_type = models.CharField(max_length=255) # Assumed CharField
#     number = models.IntegerField() # Not sure if other paramaters
#     hours = models.DecimalField(max_digits=100, decimal_places=2)
#
#     def __str__(self):
#         return str(self.incident_type) + ":" + str(self.activity.activity_id)
#
# class Event(models.Model):
#     activity = models.OneToOneField(Activity, on_delete=models.CASCADE)
#     account = models.CharField(max_length=255)
#     start_time = models.DateTimeField(null=False)
#     hours = models.DecimalField(max_digits=100, decimal_places=2)
#     name = models.CharField(max_length=255, null=False)
#     category = models.CharField(max_length=255)
#     event_type = models.CharField(max_length=255)
#
#     def __str__(self):
#         return str(self.name) + ":" + str(self.activity.activity_id)
#
# class Class(models.Model):
#     activity = models.OneToOneField(Activity, on_delete=models.CASCADE)
#     account = models.CharField(max_length=255)
#     station = models.IntegerField()
#     start_time = models.DateTimeField(null=False)
#     name = models.CharField(max_length=255, null=False)
#     category = models.CharField(max_length=255)
#     train_cat = models.IntegerField()
#     train_code = models.CharField(max_length=255)
#     hours = models.DecimalField(max_digits=100, decimal_places=2)
#
#     def __str__(self):
#         return str(self.name) + ":" + str(self.activity.activity_id)
#

