from django.shortcuts import render
from django.views.generic.base import TemplateView
from .models import Tasks
from .serializers import TaskSerializer
from rest_framework import generics


# Create your views here.
class TaskList(generics.ListCreateAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TaskSerializer


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TaskSerializer



class Home(TemplateView):
    template_name = 'index.html'
