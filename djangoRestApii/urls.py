
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

from Api.views import ProductViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register("", ProductViewSet, basename="productview")


 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    # path('api/',include('Api.urls')),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
