jQuery(document).ready(function () {
    AppCookie.init();
});

var AppCookie = {
    element: {
        cookielaw: {
            container: '#CookielawBanner',
            button: '#CookielawBanner .cookielaw-btn'
        }
    },
    duration: {
        show: 500,
        hide: 250
    },
    init: function () {
        this.initCookielaw();

        this.hooks();
    },
    initCookielaw: function() {
        jQuery(this.element.cookielaw.container).slideDown(this.duration.show);
    },
    hooks: function () {
        var that = this;

        jQuery(that.element.cookielaw.button).on('click', function () {
            Cookies.set('cookielaw_accepted', 1, {expires: 3650});

            jQuery(that.element.cookielaw.container).slideUp(that.duration.hide);
        });
    }
};