# Project Setup: Django + React

## File Structure
```
django+react/
├── backend/
│   ├── manage.py
│   ├── backend/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   └── app/
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── serializers.py
│       ├── tests.py
│       ├── views.py
│       ├── urls.py
│       └── migrations/
├── frontend/
│   ├── package.json
│   ├── public/
│   └── src/
│       ├── index.js
│       ├── App.js
│       └── components/
└── README.md
```

## Steps

### 1. Django Setup
- **Install Django**: `pip install django`
- **Create Django Project**: `django-admin startproject backend`
- **Create Django App**: `python manage.py startapp app`

### 2. Configure `settings.py`
- Add `rest_framework` and `app` to `INSTALLED_APPS`.
- Configure database settings if necessary.

### 3. Create Models
- Define your models in `app/models.py`.
```python
from django.db import models

class ExampleModel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
```
- Run `python manage.py makemigrations` and `python manage.py migrate` to create the database schema.

### 4. Create Serializers
- Define serializers in `app/serializers.py`.
```python
from rest_framework import serializers
from .models import ExampleModel

class ExampleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExampleModel
        fields = '__all__'
```

### 5. Create ViewSets
- Define viewsets in `app/views.py`.
```python
from rest_framework import viewsets
from .models import ExampleModel
from .serializers import ExampleModelSerializer

class ExampleModelViewSet(viewsets.ModelViewSet):
    queryset = ExampleModel.objects.all()
    serializer_class = ExampleModelSerializer
```

### 6. Configure URLs
- Add URLs in `app/urls.py`.
```python
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExampleModelViewSet

router = DefaultRouter()
router.register(r'example', ExampleModelViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
```
- Include app URLs in `backend/urls.py`.
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app.urls')),
]
```

### 7. Run the Server
- Start the Django development server: `python manage.py runserver`

### 8. React Setup
- Navigate to the `frontend` directory.
- **Install Create React App**: `npx create-react-app .`
- **Install Axios**: `npm install axios`

### 9. Create React Components
- Create components in `frontend/src/components/`.
- Fetch data from the Django API using Axios in `frontend/src/App.js`.

### 10. Run the React App
- Start the React development server: `npm start`

This setup provides a basic integration of Django with React, including REST framework serializers, viewsets, and URL routing.
