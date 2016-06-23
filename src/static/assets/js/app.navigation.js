jQuery(document).ready(function () {
    AppNavigation.init();
});

var AppNavigation = {
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

                var path = that.getPath(destination);

                return interval;
            }(), that.refresh.path);
        });

        jQuery(document).on('AppRoute.route.navigate', function (event, destination) {
            if (that.interval.path) {
                clearInterval(that.interval.path);
            }

            that.interval.path = window.setInterval(function interval() {
                if (that.ajax.path) {
                    that.ajax.path.abort();
                }

                var path = that.getPath(destination);

                return interval;
            }(), that.refresh.navigation);
        });
    },
    getPath: function (destination) {
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

                return json;
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