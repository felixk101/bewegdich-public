jQuery(document).ready(function () {
    AppMap.init();
});

var AppMap = {
    map: null,
    icons: [],
    markers: {
        "stops": []
    },
    polylines: null,
    bounds: null,
    destination: null,
    default: {
        zoom: 16,
        minZoom: 10
    },
    init: function () {
        this.initIcons();
        this.initMap();

        this.hooks();
    },
    initIcons: function () {
        L.Icon.Default.imagePath = '/static/assets/images/map';

        this.icons['person'] = L.icon({
            iconUrl: L.Icon.Default.imagePath + '/icon-person.svg',
            iconSize: [25, 47],
            iconAnchor: [12, 45],
            popupAnchor: [0, -47]
        });

        this.icons['stop'] = L.icon({
            iconUrl: L.Icon.Default.imagePath + '/icon-stop.svg',
            iconSize: [25, 47],
            iconAnchor: [12, 45],
            popupAnchor: [0, -47]
        });
    },
    initMap: function () {
        var that = this;

        that.map = L.map('map', {
            center: L.latLng(AppLocation.position.latitude, AppLocation.position.longitude),
            zoom: that.default.zoom,
            minZoom: that.default.minZoom,
            attributionControl: false,
            zoomControl: false
        });
        L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(that.map);

        that.setMarker({
            longitude: AppLocation.position.longitude,
            latitude: AppLocation.position.latitude
        }, 'person');
    },
    hooks: function () {
        var that = this;

        jQuery(document).on('AppLayout.after.MapSet', function (event, position) {
            that.map.invalidateSize();

            if (that.bounds) {
                that.map.fitBounds(that.bounds);
            }
        });

        jQuery(document).on('AppLocation.after.PositionSet', function (event, position) {
            that.setMarker(position, 'person');

            if (that.markers.stops.length == 0) {
                that.setPosition(position);
            }
        });

        jQuery(document).on('AppRoute.before.routes', function () {
            jQuery.each(that.markers['stops'], function (index, value) {
                that.map.removeLayer(value);
            });

            that.markers['stops'] = [];
        });

        jQuery(document).on('AppRoute.after.routes', function () {
            var positions = [];

            positions.push({
                longitude: that.markers['person'].getLatLng().lng,
                latitude: that.markers['person'].getLatLng().lat
            });

            jQuery.each(that.markers['stops'], function (index, value) {
                positions.push({
                    longitude: value.getLatLng().lng,
                    latitude: value.getLatLng().lat
                });
            });

            that.setPosition(positions);
        });

        jQuery(document).on('AppRoute.routes.stop', function (event, position) {
            that.setMarker(position, 'stop');
        });

        jQuery(document).on('AppSearch.destination.selected AppSearch.destination.error', function () {
            that.resetRoute();
        });
// TODO
        jQuery(document).on('AppRoute.route.selected', function (event, walkingpath) {
            that.setRoute(walkingpath);
        });
    },
    setPosition: function (position) {
        var that = this;

        if (Array.isArray(position)) {
            var positions = position,
                bounds = [];
            position = {
                longitude: 0,
                latitude: 0
            };

            jQuery.each(positions, function (index, value) {
                position.longitude += value.longitude;
                position.latitude += value.latitude;
                bounds.push(L.latLng(value.latitude, value.longitude))
            });

            position = {
                longitude: position.longitude / positions.length,
                latitude: position.latitude / positions.length
            };

            that.bounds = bounds;
            that.map.fitBounds(that.bounds);
        } else {
            position = L.latLng(position.latitude, position.longitude);

            that.bounds = null;
            that.map.setView(position, that.default.zoom);
        }
    },
    setMarker: function (position, type) {
        var that = this;

        position = L.latLng(position.latitude, position.longitude);

        if (type == 'stop') {
            that.markers['stops'].push(L.marker(position, {icon: that.icons[type]}).addTo(that.map));
        } else if (that.markers[type] != undefined) {
            that.markers[type].setLatLng(position);
        } else {
            that.markers[type] = L.marker(position, {icon: that.icons[type]}).addTo(that.map);
        }
    },
    setRoute: function (waypoints) {
        var that = this,
            route = [];

        if (that.polylines) {
            that.map.removeLayer(that.polylines);
        }

        jQuery.each(waypoints, function (key, value) {
            route.push(L.latLng(value.latitude, value.longitude));
        });

        that.polylines = L.polyline(route).addTo(that.map);
        that.bounds = that.polylines.getBounds();
        that.map.fitBounds(that.bounds);
    },
    resetRoute: function () {
        var that = this;

        if (that.polylines) {
            that.map.removeLayer(that.polylines);
        }

        that.bounds = null;
    }
};