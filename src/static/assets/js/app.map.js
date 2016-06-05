jQuery(document).ready(function () {
    AppMap.init();
});

var AppMap = {
    map: null,
    icons: [],
    init: function () {
        var that = this;

        this.map = new ol.Map({
            target: jQuery('#map')[0],
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.MapQuest({layer: 'osm'})
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([AppLocation.position.longitude, AppLocation.position.latitude]),
                zoom: 16
            })
        });

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
            position = ol.proj.fromLonLat([AppLocation.position.longitude, AppLocation.position.latitude]);

        that.map.getView().setCenter(position, 16);
        that.setIcon(position, 'location');
    },
    setIcon: function (position, type) {
        var that = this;

        
    }
};