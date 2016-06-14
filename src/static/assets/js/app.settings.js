jQuery(document).ready(function () {
    AppSettings.init();
});

var AppSettings = {
    element: {
        speed: '#setting-speed'
    },
    ajax: {
        speed: null
    },
    init: function () {
        this.initSpeed();
    },
    initSpeed: function () {
        var that = this;

        jQuery(that.element.speed).slider().on('change', function () {
            if (that.ajax.speed) {
                that.ajax.speed.abort();
            }

            that.ajax.speed = jQuery.ajax({
                url: '/api/settings/speed/',
                xhr: AppAjax.progress,
                method: 'POST',
                data: {
                    value: jQuery(this).val()
                },
                dataType: 'json',
                success: function (json) {
                    if (json.error) {
                        AppError.show('request');
                    }
                },
                error: function (e) {
                    if (e.statusText == 'abort') {
                        return;
                    }

                    AppError.show('request');
                }
            });
        });
    }
};