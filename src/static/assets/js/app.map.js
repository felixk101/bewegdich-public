jQuery(document).ready(function () {
    AppMap.init();
});

var AppMap = {
    map: null,
    icons: [],
    markers: {
        "stops": []
    },
    destination: null,
    init: function () {
        this.initMap();
        this.initIcons();
        this.hooks();
    },
    initMap: function () {
        var that = this;

        that.map = L.map('map', {
            center: L.latLng(AppLocation.position.latitude, AppLocation.position.longitude),
            zoom: 18,
            minZoom: 10,
            attributionControl: false,
            zoomControl: false
        });
        L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(that.map);
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
    hooks: function () {
        var that = this;

        jQuery(document).on('AppLocation.after.PositionSet', function (event, position) {
            that.setMarker(position, 'person');

            if (that.markers.stops.length == 0) {
                that.setPosition(position);
            }
        });

        jQuery(document).on('App.before.routes', function () {
            jQuery.each(that.markers['stops'], function (index, value) {
                that.map.removeLayer(value);
            });

            that.markers['stops'] = [];
        });

        jQuery(document).on('App.after.routes', function () {
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

        jQuery(document).on('App.routes.stop', function (event, position) {
            that.setMarker(position, 'stop');
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

            that.map.fitBounds(bounds);
        } else {
            position = L.latLng(position.latitude, position.longitude);

            that.map.setView(position, 18);
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
    }
};