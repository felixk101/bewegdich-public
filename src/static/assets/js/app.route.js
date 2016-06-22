jQuery(document).ready(function () {
    AppRoute.init();
});

var AppRoute = {
    init: function () {
        this.hooks();
    },
    hooks: function () {
        var that = this;

        jQuery(document).on('AppSearch.destination.selected', function (event, suggestion) {
            that.set(suggestion.data);
        });
    },
    set: function (destination) {
        var that = this;

        jQuery.ajax({
            url: '/api/route/',
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
                jQuery(document).trigger('AppRoute.set.before');

                if (json.error) {
                    AppError.show('request');
                }

                jQuery('#routes').empty();
                jQuery.each(json.data.routes, function (key, value) {
                    var id = 'route-' + value.id;

                    jQuery(document).trigger('AppRoute.routes.stop', [{
                        longitude: value.origin_stop.lng,
                        latitude: value.origin_stop.lat
                    }]);

                    jQuery('#routes').loadTemplate(jQuery('#template-route'), {
                        routeId: id,
                        originStop: value.origin_stop.name,
                        destinationStop: value.destination_stop.name,
                        duration: value.duration,
                        line: value.line.join(', '),
                        walkingDestination: JSON.stringify({
                            longitude: value.origin_stop.lng,
                            latitude: value.origin_stop.lat
                        })
                    }, {
                        append: true,
                        noDivWrapper: true,
                        success: function () {
                            jQuery('#modal-routes-detail ul.stop-path').empty();
                            jQuery.each(value.path, function (key, value) {
                                jQuery('#modal-routes-detail').find('ul.stop-path').loadTemplate(jQuery('#template-route-detail'), {
                                    stopPathName: value.name
                                }, {
                                    append: true,
                                    noDivWrapper: true,
                                    success: function () {
                                        jQuery(document).trigger('AppRoute.set.after');
                                    }
                                });
                            });
                        }
                    });
                });
            },
            error: function (e) {
                jQuery(document).trigger('AppRoute.set.error');

                if (e.statusText == 'abort') {
                    return;
                }

                AppError.show('request');
            }
        });
    }
};