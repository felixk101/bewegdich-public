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

        jQuery(document).on('AppNavigation.start.after AppNavigation.stop.after', function () {
            that.setMap();
        });

        jQuery(document).on('AppRoute.set.after AppRoute.show.after AppRoute.hide.after', function () {
            that.setMap();
        });
    },
    setMap: function () {
        var that = this;

        if (!jQuery(that.element.map).length) {
            return;
        }

        jQuery(document).trigger('AppLayout.MapSet.before');

        var newHeight = jQuery(window).height(),
            newTop = 0;

        if (jQuery(that.element.navigation).length && jQuery(that.element.navigation).is(':visible')) {
            newHeight -= jQuery(that.element.navigation).outerHeight();
            newTop += jQuery(that.element.navigation).outerHeight();
        }

        if (jQuery(that.element.routes).length && jQuery(that.element.routes).is(':visible')) {
            newHeight -= jQuery(that.element.routes).outerHeight();
        }

        jQuery(that.element.map).css({
            height: newHeight,
            top: newTop
        });

        jQuery(document).trigger('AppLayout.MapSet.after');
    }
};