jQuery(document).ready(function () {
    App_map.init();
});

var App_map = {
    map: null,
    init: function () {
        this.map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.MapQuest({layer: 'sat'})
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([App_location.position.latitude, App_location.position.longitude]),
                zoom: 4
            })
        });
    }
};