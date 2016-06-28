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
    interval: {
        path: null,
        navigation: null
    },
    refresh: {
        path: 10000,
        navigation: 5000
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

        jQuery(document).on('AppNavigation.stop.before AppSearch.destination.start AppRoute.route.selected AppRoute.route.navigate', function () {
            if (that.ajax.path) {
                that.ajax.path.abort();
            }

            if (that.interval.path) {
                clearInterval(that.interval.path);
            }

            if (that.interval.navigation) {
                clearInterval(that.interval.navigation);
            }
        });

        jQuery(document).on('AppNavigation.finish.after', function () {
            jQuery(that.element.modalFinished).modal('show')
        });

        jQuery(document).on('AppRoute.route.selected', function (event, destination) {
            if (that.interval.path) {
                clearInterval(that.interval.path);
            }

            that.interval.path = window.setInterval(function interval() {
                if (that.ajax.path) {
                    that.ajax.path.abort();
                }

                that.getPath(destination);

                return interval;
            }(), that.refresh.path);
        });

        jQuery(document).on('AppRoute.route.navigate', function (event, destination, data) {
            if (that.interval.navigation) {
                clearInterval(that.interval.navigation);
            }

            that.interval.navigation = window.setInterval(function interval() {
                if (that.ajax.path) {
                    that.ajax.path.abort();
                }

                that.getPath(destination, function (json) {
                    if (json && json.duration > 0) {
                        that.startNavigation({
                            walkingDestination: data.origin.name,
                            finalDestination: data.destination.name,
                            departuretime: data.origin.departuretime,
                            duration: json.duration,
                            path: json.path
                        });
                    } else {
                        that.finishNavigation();
                    }
                });

                return interval;
            }(), that.refresh.navigation);
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