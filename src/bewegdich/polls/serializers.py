from rest_framework import serializers
from route import Stop, Route
from models import efaStop, Coord


class StopSerializer(serializers.Serializer):
    name = serializers.CharField(required=True, allow_blank=True, max_length=100)
    lat = serializers.CharField(required=True, allow_blank=False, max_length=10)
    lng = serializers.CharField(required=True, allow_blank=False, max_length=10)
    departuretime = serializers.IntegerField(required=False)
    walkingtime = serializers.IntegerField(required=False)
    stopid = serializers.CharField(required=True, allow_blank=False, max_length=10)

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
        instance.lat = validated_data.get('lat', instance.lat)
        instance.lng = validated_data.get('lng', instance.lng)
        instance.departuretime = validated_data.get('departuretime', instance.departuretime)
        instance.walkingtime = validated_data.get('walkingtime', instance.walkingtime)
        instance.stopid = validated_data.get('stopid', instance.stopid)

        instance.save()
        return instance


class CoordSerializer(serializers.Serializer):
    """
    Helps to serialize a List of Strings
    """
    latitude = serializers.CharField(required=True, allow_blank=False, max_length=10)
    longitude = serializers.CharField(required=True, allow_blank=False, max_length=10)

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Coord.objects.create(**validated_data)


class RouteSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=False)
    origin_stop = StopSerializer()
    destination_stop = StopSerializer()
    departuretime = serializers.DateTimeField(required=False)
    duration = serializers.DurationField(required=True)
    path = StopSerializer(many=True)

    line = serializers.ListField(
        child=serializers.CharField(required=True, allow_blank=True, max_length=50)
    )

    walkingPath = CoordSerializer(many=True)

    def create(self, validated_data):
        """
        Create and return a new Route instance, given the validated data.
        """
        return Route.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.id = validated_data.get('id', instance.id)
        instance.origin = validated_data.get('origin', instance.origin)
        instance.destination = validated_data.get('destination', instance.destination)
        instance.departuretime = validated_data.get('departuretime', instance.departuretime)
        instance.path = validated_data.get('path', instance.path)
        instance.line = validated_data.get('line', instance.line)

        # instance.walkingPath = validated_data.get('walkingPath', instance.walkingPath)

        instance.save()
        return instance


class RouteList:
    """
        This Object is only needed to convert a list of routes into a JSON-Array
    """
    routes = []

    def __init__(self, routes):
        self.routes = routes


class RouteListSerializer(serializers.Serializer):
    """

    It converts a list of routes into serializable data

    """
    routes = RouteSerializer(many=True)

    def create(self, validated_data):
        """
        Create and return a new List of Routes instance, given the validated data.
        """
        return RouteList.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.routes = validated_data.get('routes', instance.routes)


class Efa_stop_serializer(serializers.Serializer):
    """
    It converts an efa_stops into serializable data
    """
    value = serializers.CharField(required=True, allow_blank=True)
    data = serializers.CharField(required=True, allow_blank=True)

    def create(self, validated_data):
        """
        Create and return a new List of Routes instance, given the validated data.
        """
        return efaStop.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.stopid = validated_data.get('stopid', instance.stopid)
        instance.name = validated_data.get('name', instance.name)


class Efa_stop_list_serializer(serializers.ListSerializer):
    child = Efa_stop_serializer()


class Walkingpath_serializer(serializers.ListSerializer):
    child = CoordSerializer()
