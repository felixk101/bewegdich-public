jQuery(document).ready(function () {
    App.init();
});

var App = {
    init: function () {
        jQuery('#search #s').autocomplete({
            serviceUrl: '/api/getStopList/',
            dataType: 'json',
            paramName: 'query',
            params: {
                longitude: function () {
                    return AppLocation.position.longitude;
                },
                latitude: function () {
                    return AppLocation.position.latitude;
                }
            },
            onSelect: function (suggestion) {
                jQuery(document).trigger('App.destination.selected', [suggestion]);
            }
        });

        this.hooks();
    },
    hooks: function () {
        var that = this;

        jQuery(document).on('App.destination.selected', function (event, suggestion) {
            that.getRoute(suggestion.data);
        });
    },
    getRoute: function (destination) {
        jQuery.ajax({
            url: '/api/getRoute/',
            data: {
                /*stopid: destination,
                 longitude: function () {
                 return AppLocation.position.longitude;
                 },
                 latitude: function () {
                 return AppLocation.position.latitude;
                 }*/
            },
            dataType: 'json',
            success: function (json) {
                if (json.error) {
                    AppError.show('request');
                }

                alert(json);
            },
            error: function (e) {
                AppError.show('request');
            }
        });
    }
};