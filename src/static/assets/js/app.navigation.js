jQuery(document).ready(function () {
    AppNavigation.init();
});

var AppNavigation = {
    element: {
        navigation: '#navigation',
        close: '#navigation .close',
        templateNavigation: '#template-navigation',
        modalFinished: '#modal-navigation-finished'
    },
    duration: {
        show: 500,
        hide: 250
    },
    ajax: {
        path: null
    },
    mode: null,
    finishDuration: 10,
    cache: {
        destination: null,
        data: null
    },
    init: function () {
        this.hooks();
    },
    hooks: function () {
        var that = this;

        jQuery(document).on('click', that.element.close, function () {
            jQuery(document).trigger('AppNavigation.close.before');

            that.stopNavigation();

            jQuery(document).trigger('AppNavigation.close.after');
        });

        jQuery(document).on('AppNavigation.stop.before AppNavigation.finish.before AppSearch.destination.start AppRoute.route.selected AppRoute.route.navigate', function () {
            that.mode = null;
            that.cache = {
                destination: null,
                data: null
            };

            if (that.ajax.path) {
                that.ajax.path.abort();
            }
        });

        jQuery(document).on('AppNavigation.finish.before', function () {
            jQuery(that.element.modalFinished).modal('show');
        });

        jQuery(document).on('AppRoute.route.selected', function (event, destination) {
            that.mode = 'path';
            that.cache.destination = destination;
        });

        jQuery(document).on('AppRoute.route.navigate', function (event, destination, data) {
            that.mode = 'navigation';
            that.cache = {
                destination: destination,
                data: data
            };
        });

        jQuery(document).on('AppRoute.route.selected AppRoute.route.navigate AppLocation.PositionSet.after', function (event, position) {
            if (!that.mode) {
                return;
            }

            if ('path' == that.mode) {
                that.getPath(that.cache.destination);
            } else if ('navigation' == that.mode) {
                that.getPath(that.cache.destination, function (json) {
                    if (json && json.duration > that.finishDuration) {
                        that.startNavigation({
                            walkingDestination: that.cache.data.origin.name,
                            finalDestination: that.cache.data.destination.name,
                            departuretime: that.cache.data.origin.departuretime,
                            duration: json.duration,
                            path: json.path
                        });
                    } else {
                        that.finishNavigation();
                    }
                });
            }
        });
    },
    startNavigation: function (data) {
        var that = this;

        jQuery(document).trigger('AppNavigation.start.before');

        jQuery(that.element.navigation).loadTemplate(jQuery(that.element.templateNavigation), data, {
            noDivWrapper: true,
            success: function () {
                jQuery(that.element.navigation).fadeIn(that.duration.show, function () {
                    jQuery(document).trigger('AppNavigation.start.after');
                });
            }
        });
    },
    stopNavigation: function () {
        var that = this;

        jQuery(document).trigger('AppNavigation.stop.before');

        jQuery(that.element.navigation).fadeOut(that.duration.hide, function () {
            jQuery(document).trigger('AppNavigation.stop.after');
        });
    },
    finishNavigation: function () {
        var that = this;

        jQuery(document).trigger('AppNavigation.finish.before');

        jQuery(that.element.navigation).fadeOut(that.duration.hide, function () {
            jQuery(document).trigger('AppNavigation.finish.after');
        });
    },
    getPath: function (destination, callback) {
        var that = this;

        if (that.ajax.path) {
            that.ajax.path.abort();
        }

        that.ajax.path = jQuery.ajax({
            url: '/api/walkingpath/',
            xhr: AppAjax.progress,
            data: {
                originLongitude: function () {
                    return AppLocation.position.longitude;
                },
                originLatitude: function () {
                    return AppLocation.position.latitude;
                },
                destinationLongitude: destination.longitude,
                destinationLatitude: destination.latitude
            },
            dataType: 'json',
            timeout: 30000,
            success: function (json) {
                if (json.error) {
                    jQuery(document).trigger('AppNavigation.getPath.error');

                    AppError.show('request');
                }

                jQuery(document).trigger('AppNavigation.getPath', [json.path]);

                if (callback && typeof callback == 'function') {
                    callback(json);
                }
            },
            error: function (e) {
                jQuery(document).trigger('AppNavigation.getPath.error');

                if (e.statusText == 'abort') {
                    return;
                }

                AppError.show('request');
            }
        });
    }
};