jQuery(document).ready(function () {
    App.init();
});

var App = {
    init: function () {
        jQuery('#search #s').autocomplete({
            serviceUrl: '/api/getStopList/',
            dataType: 'json',
            paramName: 'query',
            ajaxSettings: {
                xhr: AppAjax.progress
            },
            appendTo: '#search .search-container',
            width: jQuery('#search .search-field').outerWidth(),
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

        jQuery('#routes').on('show.bs.collapse', function () {
            //alert("sds");
        });
    },
    getRoute: function (destination) {
        jQuery.ajax({
            url: '/api/getRoute/',
            xhr: AppAjax.progress,
            data: {
                stopid: destination,
                longitude: function () {
                    return AppLocation.position.longitude;
                },
                latitude: function () {
                    return AppLocation.position.latitude;
                }
            },
            dataType: 'json',
            success: function (json) {
                if (json.error) {
                    AppError.show('request');
                }

                jQuery(document).trigger('App.before.routes');

                jQuery('#routes').empty();
                jQuery.each(json.data.routes, function (key, value) {
                    var id = 'route-' + value.id,
                        detailId = 'route-detail-' + value.id;

                    jQuery(document).trigger('App.routes.stop', [{
                        longitude: value.origin_stop.lng,
                        latitude: value.origin_stop.lat
                    }]);

                    jQuery('#routes').loadTemplate(jQuery('#template-route'), {
                        panelId: id,
                        panelDetailId: detailId,
                        panelDetailTarget: '#' + detailId,
                        originStop: value.origin_stop.name,
                        destinationStop: value.destination_stop.name,
                        duration: value.duration,
                        line: value.line.join(', ')
                    }, {
                        append: true,
                        noDivWrapper: true,
                        success: function () {
                            jQuery.each(value.path, function (key, value) {
                                jQuery('#' + detailId).find('ul.stop-path').loadTemplate(jQuery('#template-route-detail'), {
                                    stopPathName: value.name
                                }, {
                                    append: true,
                                    noDivWrapper: true,
                                    success: function () {
                                        jQuery(document).trigger('App.after.routes');
                                    }
                                });
                            });
                        }
                    });
                });
            },
            error: function (e) {
                AppError.show('request');
            }
        });
    }
};