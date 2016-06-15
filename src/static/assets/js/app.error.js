var AppError = {
    element: {
        errors: '#errors',
        error: '#error'
    },
    duration: {
        show: 500,
        hide: 250,
        displayTime: 5000
    },
    add: function (message, displayTime) {
        displayTime = typeof target !== 'undefined' ? display : this.duration.displayTime;

        jQuery(this.element.errors).find(this.element.error).find('span').text(message);
        jQuery(this.element.errors).find(this.element.error).fadeIn(this.duration.show);

        if (displayTime > 0) {
            jQuery(this.element.errors).find(this.element.error).delay(displayTime).fadeOut(this.duration.show);
        }
    },
    show: function (id, displayTime) {
        displayTime = typeof displayTime !== 'undefined' ? displayTime : this.duration.displayTime;

        jQuery(this.element.errors).find('.error').not('#error-' + id).fadeOut(this.duration.hide);
        jQuery(this.element.errors).find('#error-' + id).fadeIn(this.duration.show);

        if (displayTime > 0) {
            jQuery(this.element.errors).find('#error-' + id).delay(displayTime).fadeOut(this.duration.show);
        }
    },
    hide: function (id) {
        jQuery(this.element.errors).find('#error-' + id).fadeOut(this.duration.hide);
    }
};