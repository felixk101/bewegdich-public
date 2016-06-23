jQuery(document).ready(function () {
    AppNavigation.init();
});

var AppNavigation = {
    element: {
        navigation: '#navigation',
        templateNavigation: '#template-navigation'
    },
    duration: {
        show: 500,
        hide: 250
    },
    interval: {
        path: null
    },
    refresh: {
        path: 10000,
        navigation: 5000
    },
    ajax: {
        path: null
    },
    init: function () {
        this.hooks();
    },
    hooks: function () {
        var that = this;

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
            if (that.interval.path) {
                clearInterval(that.interval.path);
            }

            that.interval.path = window.setInterval(function interval() {
                if (that.ajax.path) {
                    that.ajax.path.abort();
                }

                that.getPath(destination, function (json) {
                    if (json && json.path.length > 1) {
                        that.startNavigation({
                            walkingDestination: data.origin.name,
                            finalDestination: data.destination.name,
                            depaturetime: data.origin.depaturetime,
                            duration: json.duration,
                            path: json.path
                        });
                    } else {
                        that.stopNavigation();
                    }
                });

                return interval;
            }(), that.refresh.navigation);
        });
    },
    startNavigation: function (data) {
        var that = this;

        jQuery(document).trigger('AppNavigation.before.start');

        jQuery(that.element.navigation).loadTemplate(jQuery(that.element.templateNavigation), data, {
            noDivWrapper: true,
            success: function () {
                jQuery(that.element.navigation).fadeIn(that.duration.show);

                jQuery(document).trigger('AppNavigation.after.start');
            }
        });
    },
    stopNavigation: function () {
        var that = this;

        jQuery(document).trigger('AppNavigation.before.stop');

        clearInterval(that.interval.path);

        jQuery(that.element.navigation).fadeIn(that.duration.hide);

        jQuery(document).trigger('AppNavigation.after.stop');
    },
    getPath: function (destination, callback) {
        jQuery.ajax({
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