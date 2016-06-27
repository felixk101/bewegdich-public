jQuery(document).ready(function () {
    AppRoute.init();
});

var AppRoute = {
    element: {
        routes: '#routes',
        route: '#routes .route',
        routeSelect: '#routes .route .route-select',
        templateRoute: '#template-route',
        templateRouteDetail: '#template-route-detail',
        modalRouteDetails: '#modal-route-details'
    },
    duration: {
        show: 500,
        hide: 250
    },
    ajax: {
        routes: null
    },
    init: function () {
        this.hooks();
    },
    hooks: function () {
        var that = this;

        jQuery(document).on('AppSearch.destination.selected', function (event, suggestion) {
            that.set(suggestion.data);
        });

        jQuery(document).on('AppRoute.set.before AppNavigation.stop.after', function () {
            that.empty();
        });

        jQuery(document).on('AppNavigation.start.after', function () {
            that.hide();
        });

        jQuery(document).on('click', that.element.route + ' .panel-title span', function () {
            var originDestination = jQuery(this).closest(that.element.route).data('origin-destination');

            jQuery(document).trigger('AppRoute.route.selected', [originDestination]);
        });

        jQuery(document).on('click', that.element.routeSelect, function () {
            var originDestination = jQuery(this).closest(that.element.route).data('origin-destination'),
                originStop = jQuery(this).closest(that.element.route).data('origin-stop'),
                originDeparturetime = jQuery(this).closest(that.element.route).data('origin-departuretime'),
                destinationStop = jQuery(this).closest(that.element.route).data('destination-stop');

            jQuery(document).trigger('AppRoute.route.navigate', [originDestination, {
                origin: {
                    name: originStop,
                    departuretime: originDeparturetime
                },
                destination: {
                    name: destinationStop
                }
            }]);
        });
    },
    set: function (destination) {
        var that = this;

        if (that.ajax.routes) {
            that.ajax.routes.abort();
        }

        that.ajax.routes = jQuery.ajax({
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
            timeout: 30000,
            success: function (json) {
                if (json.error) {
                    jQuery(document).trigger('AppRoute.set.error');

                    AppError.show('request');
                }

                jQuery(document).trigger('AppRoute.set.before');

                jQuery.each(json.data.routes, function (key, value) {
                    jQuery(document).trigger('AppRoute.routes.stop', [{
                        longitude: value.origin_stop.lng,
                        latitude: value.origin_stop.lat
                    }]);

                    jQuery(that.element.routes).loadTemplate(jQuery(that.element.templateRoute), {
                        routeId: 'route-' + value.id,
                        originStop: value.origin_stop.name,
                        originDestination: JSON.stringify({
                            longitude: value.origin_stop.lng,
                            latitude: value.origin_stop.lat
                        }),
                        originDeparturetime: value.origin_stop.departuretime,
                        originWalkingtime: value.origin_stop.walkingtime,
                        destinationStop: value.destination_stop.name,
                        line: value.line.join(', ')
                    }, {
                        append: true,
                        noDivWrapper: true,
                        success: function () {
                            jQuery(that.element.modalRouteDetails).find('ul.stop-path').empty();
                            jQuery.each(value.path, function (key, value) {
                                jQuery(that.element.modalRouteDetails).find('ul.stop-path').loadTemplate(jQuery(that.element.templateRouteDetail), {
                                    stopPathName: value.name
                                }, {
                                    append: true,
                                    noDivWrapper: true,
                                    success: function () {
                                        that.show();

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
    },
    empty: function () {
        jQuery(document).trigger('AppRoute.empty.before');

        jQuery(this.element.routes).empty();

        jQuery(document).trigger('AppRoute.empty.after');
    },
    show: function () {
        jQuery(document).trigger('AppRoute.show.before');

        jQuery(this.element.routes).fadeIn(this.duration.show, function() {
            jQuery(document).trigger('AppRoute.show.after');
        });
    },
    hide: function () {
        jQuery(document).trigger('AppRoute.hide.before');

        jQuery(this.element.routes).fadeOut(this.duration.hide, function() {
            jQuery(document).trigger('AppRoute.hide.after');
        });
    }
};