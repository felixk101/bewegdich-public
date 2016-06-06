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
            transformResult: function (response) {
                return {
                    query: response.query,
                    suggestions: jQuery.map(response.suggestions, function (dataItem) {
                        return {value: dataItem.data, data: dataItem.value.toString()};
                    })
                };
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
        //alert(destination);
    }
};