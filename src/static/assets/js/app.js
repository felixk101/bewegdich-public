jQuery(document).ready(function () {
    App.init();
});

var App = {
    init: function () {
        jQuery('#search input').autocomplete({
            serviceUrl: '/api/getstoplist',
            dataType: 'json',
            paramName: 'search',
            onSelect: function (suggestion) {
                alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
            }
        });
    }
};