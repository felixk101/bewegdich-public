jQuery(document).ready(function () {
    AppMap.init();
});

var AppMap = {
    default: {
        focus: 'person',
        zoom: 16,
        minZoom: 10
    },
    setting: {
        focus: 'person',
        zoom: 16
    },
    element: {
        mapRelocate: '#map-relocate'
    },
    map: null,
    icons: [],
    markers: {
        "stops": []
    },
    polylines: null,
    bounds: null,
    destination: null,
    positionInitialized: false,
    mapInteraction: false,
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
            zoom: that.setting.zoom,
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

        jQuery(that.map).on('dragstart zoomstart', function () {
            that.mapInteraction = true;
        });

        jQuery(that.element.mapRelocate).on('click', function () {
            if ('bounds' == that.setting.focus) {
                that.map.fitBounds(that.bounds);
            } else {
                that.setPosition(AppLocation.position);
            }

            that.mapInteraction = false;
        });

        jQuery(document).on('AppLayout.MapSet.after', function (event, position) {
            that.map.invalidateSize();

            if (that.bounds && 'bounds' == that.setting.focus) {
                that.map.fitBounds(that.bounds);
            }
        });

        jQuery(document).on('AppLocation.PositionSet.after', function (event, position) {
            that.setMarker(position, 'person');

            if (that.mapInteraction && that.positionInitialized) {
                return;
            }

            if ('bounds' == that.setting.focus) {
                that.map.fitBounds(that.bounds);
            } else {
                that.setPosition(position);
            }

            that.positionInitialized = true;
        });

        jQuery(document).on('AppSearch.destination.selected AppSearch.destination.error AppNavigation.finish.before AppNavigation.stop.before', function () {
            that.resetRoute();
        });

        jQuery(document).on('AppRoute.set.before', function () {
            jQuery.each(that.markers['stops'], function (index, value) {
                that.map.removeLayer(value);
            });

            that.markers['stops'] = [];
        });

        jQuery(document).on('AppRoute.set.after', function () {
            var positions = [];

            that.setting.focus = 'bounds';
            that.setting.zoom = that.default.zoom;

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

        jQuery(document).on('AppRoute.route.selected', function () {
            that.setting.focus = 'bounds';
            that.setting.zoom = that.default.zoom;
        });

        jQuery(document).on('AppNavigation.getPath', function (event, path) {
            that.setRoute(path);
        });

        jQuery(document).on('AppRoute.route.navigate', function () {
            that.bounds = null;
            that.setting.focus = 'navigation';
            that.setting.zoom = 18;

            that.setPosition(AppLocation.position);
        });

        jQuery(document).on('AppNavigation.stop.after', function () {
            that.setting.focus = that.default.focus;
            that.setting.zoom = that.default.zoom;

            that.setPosition(AppLocation.position);
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
            that.map.setView(position, that.setting.zoom);
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

        if ('bounds' == that.setting.focus) {
            that.map.fitBounds(that.bounds);
        }
    },
    resetRoute: function () {
        var that = this;

        if (that.polylines) {
            that.map.removeLayer(that.polylines);
        }

        that.bounds = null;
    }
};