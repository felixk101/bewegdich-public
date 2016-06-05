jQuery(document).ready(function () {
    App_slideMenu.init();
});

var App_slideMenu = {
    snap: null,
    init: function () {
        this.snap = new Snap({
            element: jQuery('#content')[0]
        });

        jQuery('.snap-open-left').on('click', function () {
            snapper.open('left');
        });

        jQuery('.snap-open-right').on('click', function () {
            snapper.open('right');
        });
    }
};