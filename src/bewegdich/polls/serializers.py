from rest_framework import serializers
from route import Stop



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


class RouteSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=False)
    origin_stop = StopSerializer()
    destination_stop = StopSerializer()
    depaturetime = serializers.DateTimeField(required=True)
    duration = serializers.TimeField(required=True)
    path = StopSerializer(many=True)
    line = StopSerializer(many=True)

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Route.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.id = validated_data.get('id', instance.id)
        instance.origin_stop  = validated_data.get('origin', instance.origin_stop)
        instance.destination_stop = validated_data.get('destination', instance.destination_stop)
        instance.depaturetime = validated_data.get('depaturetime', instance.depaturetime)
        instance.path = validated_data.get('path', instance.path)
        instance.line = validated_data.get('line', instance.line)
        instance.save()
        return instance