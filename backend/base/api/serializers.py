from rest_framework.serializers import ModelSerializer
from base.models import Groceries

class GroceriesSericalizer(ModelSerializer):
    class Meta:
        model = Groceries
        fields= '__all__'