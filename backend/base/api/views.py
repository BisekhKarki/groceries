from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

##Customizing the token view to get user and password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import GroceriesSericalizer
from base.models import Groceries

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh'
    ]

    return Response(routes)
    # return JsonResponse(routes, safe=False)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getGroceries(request):
    user = request.user
    groceries = Groceries.objects.all();
    # groceries = user.groceries_set.all()
    serializer = GroceriesSericalizer(groceries,many=True);
    return Response(serializer.data)