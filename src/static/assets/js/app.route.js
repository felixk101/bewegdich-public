jQuery(document).ready(function () {
    AppRoute.init();
});

var AppRoute = {
        element: {
            routes: '#routes',
            route: '.route',
            templateRoute: '#template-route',
            templateRouteDetail: '#template-route-detail',
            modalRouteDetails: '#modal-route-details'
        },
        init: function () {
            this.hooks();
        },
        hooks: function () {
            var that = this;

            jQuery(document).on('AppSearch.destination.selected', function (event, suggestion) {
                that.setRoute(suggestion.data);
            });

            jQuery('.route-select').on('click', 'button', function () {
                alert("sds");
                jQuery(document).trigger('AppRoute.route.selected');
            });
        },
        setRoute: function (destination) {
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