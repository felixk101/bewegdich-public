jQuery(document).ready(function () {
    AppCookie.init();
});

var AppCookie = {
    element: {
        data: 'body',
        introduction: {
            modal: '#modal-introduction',
            button: '#modal-introduction .introduction-btn'
        },
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
        this.initIntroduction();
        this.initCookielaw();

        this.hooks();
    },
    initIntroduction: function () {
        if (!jQuery(this.element.data).data('introduction')) {
            return;
        }

        jQuery(this.element.introduction.modal).modal('show');
    },
    initCookielaw: function () {
        jQuery(this.element.cookielaw.container).slideDown(this.duration.show);
    },
    hooks: function () {
        var that = this;

        jQuery(that.element.introduction.button).on('click', function () {
            Cookies.set('introduction', 1, {expires: 3650});
        });

        jQuery(that.element.cookielaw.button).on('click', function () {
            Cookies.set('cookielaw_accepted', 1, {expires: 3650});

            jQuery(that.element.cookielaw.container).slideUp(that.duration.hide);
        });
    }
};