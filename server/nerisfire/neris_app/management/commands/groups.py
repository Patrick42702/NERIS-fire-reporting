# groups.py

from django.core.management.base import BaseCommand
from neris_app.scripts.groups import main

class Command(BaseCommand):
  help = 'Runs the groups.py script'
  
  def handle(self, *args, **kwargs):
    print('Hello')
    main()