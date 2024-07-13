from .organization import urlpatterns as organization_urls
from .status_history import urlpatterns as status_history_urls

urlpatterns = []
urlpatterns += organization_urls
urlpatterns += status_history_urls
