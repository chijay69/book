from rest_framework import serializers
from .models import Tasks


#create a task model serializee
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = ['id', 'text', 'date', 'time', 'reminder']
