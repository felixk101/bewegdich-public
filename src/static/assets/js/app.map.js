jQuery(document).ready(function () {
    AppMap.init();
});

var AppMap = {
    map: null,
    markers: [],
    init: function () {
        var that = this;

        this.map = L.map('map', {
            center: L.latLng(AppLocation.position.latitude, AppLocation.position.longitude),
            zoom: 18,
            attributionControl: false,
            zoomControl: false
        });
        L.Icon.Default.imagePath = '/static/assets/images';
        L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(that.map);

        this.hooks();
    },
    hooks: function () {
        var that = this;

        jQuery(document).on('AppLocation.after.PositionSet', function () {
            that.setPosition();
        });
    },
    setPosition: function () {
        var that = this,
            position = L.latLng(AppLocation.position.latitude, AppLocation.position.longitude);

        that.map.setView(position, 18);
        that.setIcon(position, 'location');
    },
    setIcon: function (position, type) {
        var that = this;

        if (that.markers[type] != undefined) {
            that.markers[type].setLatLng(position);
        } else {
            that.markers[type] = L.marker(position).addTo(that.map);
        }
    }
};