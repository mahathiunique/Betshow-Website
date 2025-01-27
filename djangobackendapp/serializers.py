from .models import Betshow,Userdetails
from rest_framework import serializers 
 
class BetshowSerializer(serializers.ModelSerializer): 
    class Meta: 
        model=Betshow 
        fields='__all__' 
     
class UserSerializer(serializers.ModelSerializer): 
    class Meta: 
        model=Userdetails 
        fields='__all__'