jQuery(document).ready(function () {
    AppSlideMenu.init();
});

var AppSlideMenu = {
    snap: null,
    init: function () {
        this.snap = new Snap({
            element: jQuery('#content')[0],
            touchToDrag: false
        });

        this.hooks();
    },
    hooks: function () {
        var that = this;

        jQuery('.snap-open-left').on('click', function () {
            that.snap.open('left');
        });

        jQuery('.snap-open-right').on('click', function () {
            that.snap.open('right');
        });

        jQuery('.snap-close').on('click', function () {
            that.snap.close();
        });
    }
};