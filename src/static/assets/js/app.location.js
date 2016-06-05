jQuery(document).ready(function () {
    App_location.init();
});

var App_location = {
    position: {
        latitude: 0,
        longitude: 0
    },
    init: function () {
        this.get();
    },
    get: function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.set, this.error);
        } else {
            this.error();
        }
    },
    set: function (position) {
        this.position.latitude = position.coords.latitude;
        this.position.longitude = position.coords.longitude;
        alert(this.position.latitude);
    },
    error: function () {
        alert("error");
    }
};