# this file will be used to create our groups and add them into the database
from ..models import Developer, CompanyAdmin, Moderator
from django.contrib.auth.models import Group

# Define your group names
GROUP_NAMES = ['Developer', 'Company Admin', 'Moderator', 'Member']

# Add empty groups
def main():
    for group_name in GROUP_NAMES:
        Group.objects.create(name=group_name)

if __name__ == '__main__':
    main()
    print("Empty groups added to the database")
