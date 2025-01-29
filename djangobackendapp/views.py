from django.shortcuts import render,redirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Betshow,Userdetails 
from rest_framework.decorators import api_view 
from.serializers import BetshowSerializer,UserdetailsSerializer
from rest_framework.views import APIView 
from rest_framework.response import Response
from django.http.response import  JsonResponse
from rest_framework.status import HTTP_200_OK,HTTP_201_CREATED,HTTP_400_BAD_REQUEST

# Create your views here.
class UsersignupAPI(APIView):
    def post(self,request):
        if request.method=='POST':    
            x1=request.POST['uname'] 
            x2=request.POST['uemail'] 
            x3=request.POST['password']
            x4=request.POST['dateofbirth']
            x5=request.POST['phoneno'] 
            row=Userdetails(uname=x1,uemail=x2,password=x3,dateofbirth=x4,phoneno=x5) 
            row.save() 
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
        

class UserloginAPI(APIView):
    def post(self,request):
        uname=request.POST['uname'] 
        pwd=request.POST['password'] 
        row=Userdetails.objects.filter(uname=uname).values() 
        print(row) 
        if len(row)==0: 
            return  JsonResponse("New user ?",safe=False)
        else:
            for i in row: 
                if i['password']==int(pwd): 
                    return  JsonResponse("Successful",safe=False)
                return  JsonResponse("Wrong password",safe=False)
                




def logout(request):
    request.session['currentuser']=None 
    return JsonResponse("Please login",success=True)

class BetshowList(APIView): 
    def get(self,request): 
        rows=Betshow.objects.all() 
        srows=BetshowSerializer(rows,many=True) 
        return JsonResponse(srows.data,status=HTTP_200_OK,safe=False)
    

