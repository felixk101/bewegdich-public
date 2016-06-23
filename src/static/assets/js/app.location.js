jQuery(document).ready(function () {
    AppLocation.init();
});

var AppLocation = {
    element: {
        location: 'body'
    },
    interval: {
        location: null
    },
    refresh: {
        location: 5000
    },
    position: {
        longitude: 0,
        latitude: 0,
    },
    init: function () {
        var that = this;

        that.position = {
            longitude: jQuery(that.element.location).data('longitude'),
            latitude: jQuery(that.element.location).data('latitude')
        };

        if (that.interval.location) {
            clearInterval(that.interval.location);
        }

        that.interval.location = window.setInterval(function interval() {
            that.get();

            return interval;
        }(), that.refresh.location);
    },
    get: function (options) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.set, this.error, options);
        } else {
            this.error();
        }
    },
    set: function (position) {
        jQuery(document).trigger('AppLocation.before.PositionSet', [AppLocation.position]);

        AppLocation.position.longitude = position.coords.longitude;
        AppLocation.position.latitude = position.coords.latitude;

        AppError.hide('location-denied');
        AppError.hide('location-unavailable');

        jQuery(document).trigger('AppLocation.after.PositionSet', [AppLocation.position]);
    },
    error: function (e) {
        jQuery(document).trigger('AppLocation.before.error', [e]);

        switch (e.code) {
            case e.PERMISSION_DENIED:
                AppError.show('location-denied', 0);
                break;
            case e.POSITION_UNAVAILABLE:
                AppError.show('location-unavailable', 0);
                break;
            case e.TIMEOUT:
                AppError.show('location-unavailable', 0);
                break;
            case e.UNKNOWN_ERROR:
                AppError.show('location-unavailable', 0);
                break;
            default:
                AppError.show('location-unavailable', 0);
                break;
        }

        jQuery(document).trigger('AppLocation.after.error', [e]);
    }
};