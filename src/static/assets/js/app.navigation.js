jQuery(document).ready(function () {
    AppNavigation.init();
});

var AppNavigation = {
    path: null,
    init: function () {
        this.hooks();
    },
    hooks: function () {
        var that = this;

        jQuery(document).on('AppRoute.route.selected', function (event, destination) {
            that.path = that.getPath(destination);
        });

        jQuery(document).on('AppRoute.route.navigate', function (event, destination) {
            that.path = that.getPath(destination);
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