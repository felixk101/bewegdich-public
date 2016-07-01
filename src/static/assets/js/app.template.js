jQuery(document).ready(function () {
    AppTemplate.init();
});

var AppTemplate = {
    element: {
        data: 'body'
    },
    init: function () {
        var that = this;

        jQuery.addTemplateFormatter({
            date: function (value) {
                return moment(value, 'X').format(jQuery(that.element.data).attr('data-format-date'));
            },
            time: function (value) {
                return moment(value, 'X').format(jQuery(that.element.data).attr('data-format-time'));
            },
            dateTime: function (value) {
                return moment(value, 'X').format(jQuery(that.element.data).attr('data-format-dateTime'));
            },
            countdown: function (value) {
                return moment().startOf('day').seconds(value).format(jQuery(that.element.data).attr('data-format-countdown'));
            }
        });
    }
};