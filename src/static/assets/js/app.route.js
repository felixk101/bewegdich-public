jQuery(document).ready(function () {
    AppRoute.init();
});

var AppRoute = {
        element: {
            routes: '#routes',
            route: '.route',
            routeSelect: '.route-select',
            templateRoute: '#template-route',
            templateRouteDetail: '#template-route-detail',
            modalRouteDetails: '#modal-route-details'
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
                that.setRoute(suggestion.data);
            });

            jQuery(document).on('click', that.element.routes + ' ' + that.element.route + ' .panel-title span', function () {
                var originDestination = jQuery(this).closest(that.element.route).data('origin-destination');

                jQuery(document).trigger('AppRoute.route.selected', [originDestination]);
            });

            jQuery(document).on('click', that.element.routes + ' ' + that.element.routeSelect, function () {
                var originDestination = jQuery(this).closest(that.element.route).data('origin-destination'),
                    originStop = jQuery(this).closest(that.element.route).data('origin-stop'),
                    originDepaturetime = jQuery(this).closest(that.element.route).data('origin-depaturetime'),
                    destinationStop = jQuery(this).closest(that.element.route).data('destination-stop');

                jQuery(document).trigger('AppRoute.route.navigate', [originDestination, {
                    origin: {
                        name: originStop,
                        depaturetime: originDepaturetime
                    },
                    destination: {
                        name: destinationStop
                    }
                }]);
            });
        },
        setRoute: function (destination) {
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
                        jQuery(document).trigger('AppRoute.setRoute.error');

                        AppError.show('request');
                    }

                    jQuery(document).trigger('AppRoute.setRoute.before');

                    jQuery(that.element.routes).empty();
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
                            originDepaturetime: value.origin_stop.depaturetime,
                            destinationStop: value.destination_stop.name,
                            duration: value.duration,
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
                                            jQuery(document).trigger('AppRoute.setRoute.after');
                                        }
                                    });
                                });
                            }
                        });
                    });
                },
                error: function (e) {
                    jQuery(document).trigger('AppRoute.setRoute.error');

                    if (e.statusText == 'abort') {
                        return;
                    }

                    AppError.show('request');
                }
            });
        }
    }
    ;