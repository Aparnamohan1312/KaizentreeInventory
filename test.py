from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status
from .models import Item
from .serializers import ItemSerializer

class ItemAPITestCase(APITestCase):
    def setUp(self):
        self.item = Item.objects.create(sku='SKU001', name='Item 1', category='Category 1', stock_status='In stock', available_stock=10)

    def test_item_list(self):
        url = reverse('item-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        serialized_data = ItemSerializer(self.item).data
        self.assertEqual(response.data[0], serialized_data)
