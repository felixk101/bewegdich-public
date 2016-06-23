jQuery(document).ready(function () {
    AppLayout.init();
});

var AppLayout = {
    element: {
        map: '#map',
        routes: '#routes',
        navigation: '#navigation'
    },
    init: function () {
        this.setMap();

        this.hooks();
    },
    hooks: function () {
        var that = this;

        jQuery(window).resize(function () {
            that.setMap();
        });

        jQuery(document).on('AppNavigation.after.start', function () {
            that.setMap();

            jQuery(that.element.navigation).resize(function () {
                that.setMap();
            });
        });

        jQuery(document).on('AppRoute.after.routes', function () {
            that.setMap();

            jQuery(that.element.routes).resize(function () {
                that.setMap();
            });
        });
    },
    setMap: function () {
        var that = this;

        if (!jQuery(that.element.map).length) {
            return;
        }

        jQuery(document).trigger('AppLayout.before.MapSet');

        var newHeight = jQuery(window).height();

        if (jQuery(that.element.navigation).length && jQuery(that.element.navigation).is(':visible')) {
            newHeight -= jQuery(that.element.navigation).outerHeight();
        }

        if (jQuery(that.element.routes).length && jQuery(that.element.routes).is(':visible')) {
            newHeight -= jQuery(that.element.routes).outerHeight();
        }

        jQuery(that.element.map).css('height', newHeight);

        jQuery(document).trigger('AppLayout.after.MapSet');
    }
};