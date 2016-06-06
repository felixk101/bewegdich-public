jQuery(document).ready(function () {
    App.init();
});

var App = {
    init: function () {
        jQuery('#search #s').autocomplete({
            serviceUrl: '/api/getStopList/',
            dataType: 'json',
            paramName: 'query',
            transformResult: function (response) {
                return {
                    query: response.query,
                    suggestions: jQuery.map(response.suggestions, function (dataItem) {
                        return {value: dataItem.value.toString(), data: dataItem.data};
                    })
                };
            },
            onSelect: function (suggestion) {
                alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
            }
        });
    }
};