jQuery(document).ready(function () {
    AppSlideMenu.init();
});

var AppSlideMenu = {
    snap: null,
    init: function () {
        this.snap = new Snap({
            element: jQuery('#content')[0]
        });

        this.hooks();
    },
    hooks: function () {
        var that = this;

        that.snap.on('ignore', function () {
            if (jQuery('body').hasClass('snapjs-left') || jQuery('body').hasClass('snapjs-right')) {
                that.snap.close();
            }
        });

        jQuery('.snap-open-left').on('click', function () {
            that.snap.open('left');
        });

        jQuery('.snap-open-right').on('click', function () {
            that.snap.open('right');
        });
    }
};