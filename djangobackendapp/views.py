from django.shortcuts import render,redirect
from .models import Betshow,Userdetails 
from rest_framework.decorators import api_view 
from.serializers import BetshowSerializer,UserSerializer
from rest_framework.views import APIView 
from rest_framework.response import Response
from django.http.response import  JsonResponse
from rest_framework.status import HTTP_200_OK,HTTP_201_CREATED,HTTP_400_BAD_REQUEST

# Create your views here.

def showlogin(request): 
    print(request.method) 
    if request.method=='POST': 
        uname=request.POST['username'] 
        pwd=request.POST['password'] 
        row=Userdetails.objects.filter(uname=uname).values() 
        print(row) 
        if len(row)==0: 
            return  JsonResponse("New user ?",success=False)
        else: 
            for i in row: 
                if i['password']==int(pwd): 
                    request.session['currentuser']=i['uname']
                    return  JsonResponse("Successful",success=True)
    return JsonResponse("Invalid username",success=False)  

def showsignup(request): 
    print(request.method) 
    if request.method=='POST': 
        x1=request.POST['uname'] 
        x2=request.POST['uemail'] 
        x3=request.POST['password']
        x4=request.POST['dateofbirth']
        x5=request.POST['phoneno'] 
        row=Userdetails(uname=x1,uemail=x2,password=x3,dateofbirth=x4,phoneno=x5) 
        row.save() 
        return  JsonResponse("Saved successfully",success=True)
    return JsonResponse("Error",success=False)

def logout(request):
    request.session['currentuser']=None 
    return JsonResponse("Please login",success=True)

class BetshowList(APIView): 
    def get(self,request): 
        rows=Betshow.objects.all() 
        srows=BetshowSerializer(rows,many=True) 
        return JsonResponse(srows.data,status=HTTP_200_OK)