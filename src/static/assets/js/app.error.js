var AppError = {
    element: '#errors',
    duration: {
        show: 500,
        hide: 250
    },
    show: function (id) {
        jQuery(this.element).find('.error').fadeOut(this.duration.hide);
        jQuery(this.element).find('#error-' + id).fadeIn(this.duration.show);
    },
    hide: function (id) {
        jQuery(this.element).find('#error-' + id).fadeOut(this.duration.hide);
    }
};