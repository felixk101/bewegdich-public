from rest_framework import serializers
from models import Stop



class StopSerializer(serializers.Serializer):
    name = serializers.CharField(required=True, allow_blank=True, max_length=100)
    lat = serializers.CharField(required=True, allow_blank=False, max_length=10)
    lng = serializers.CharField(required=True, allow_blank=False, max_length=10)
    depaturetime = serializers.DateTimeField(required=False)
    walkingtime = serializers.IntegerField(read_only=False)

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Stop.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.name = validated_data.get('name', instance.name)
        instance.lat  = validated_data.get('lat', instance.lat)
        instance.lng = validated_data.get('lng', instance.lng)
        instance.depaturetime = validated_data.get('depaturetime', instance.depaturetime)
        instance.walkingtime = validated_data.get('walkingtime', instance.walkingtime)
        instance.save()
        return instance
