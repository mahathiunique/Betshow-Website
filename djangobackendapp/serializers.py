from .models import Betshow,Userdetails
from rest_framework import serializers 
 
class BetshowSerializer(serializers.ModelSerializer): 
    class Meta: 
        model=Betshow 
        fields='__all__' 
     
class UserdetailsSerializer(serializers.ModelSerializer): 
    class Meta: 
        model=Userdetails 
        fields='__all__'