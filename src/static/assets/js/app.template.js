jQuery(document).ready(function () {
    AppTemplate.init();
});

var AppTemplate = {
    element: {
        format: 'body'
    },
    init: function () {
        var that = this;

        jQuery.addTemplateFormatter({
            date: function (value) {
                return moment(value, 'X').format(jQuery(that.element.format).attr('data-format-date'));
            },
            time: function (value) {
                return moment(value, 'X').format(jQuery(that.element.format).attr('data-format-time'));
            },
            dateTime: function (value) {
                return moment(value, 'X').format(jQuery(that.element.format).attr('data-format-dateTime'));
            }
        });
    }
};