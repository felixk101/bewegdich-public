jQuery(document).ready(function () {
    AppSearch.init();
});

var AppSearch = {
    element: {
        field: '#search .search-field'
    },
    status: {
        loading: 'loading',
        disabled: 'disabled'
    },
    statusCurrent: null,
    init: function () {
        var that = this;

        jQuery('#search #s').autocomplete({
            serviceUrl: '/api/stoplist/',
            dataType: 'json',
            paramName: 'query',
            ajaxSettings: {
                xhr: AppAjax.progress,
                timeout: 30000,
            },
            appendTo: '#search .search-container',
            width: jQuery('#search .search-field').outerWidth(),
            params: {
                longitude: function () {
                    return AppLocation.position.longitude;
                },
                latitude: function () {
                    return AppLocation.position.latitude;
                }
            },
            onSelect: function (suggestion) {
                that.statusLoading();

                jQuery(document).trigger('AppSearch.destination.selected', [suggestion]);
            },
            onSearchError: function (query, jqXHR, textStatus, errorThrown) {
                if (errorThrown == 'abort') {
                    return;
                }

                jQuery(document).trigger('AppSearch.destination.error');

                AppError.show('request');
            }
        });

        this.hooks();
    },
    hooks: function () {
        var that = this;

        jQuery(document).on('AppLocation.after.error', function (event, e) {
            that.statusCurrent = 'disabled';
            that.statusDisabled();
        });

        jQuery(document).on('AppLocation.after.PositionSet', function (event, position) {
            if (that.statusCurrent == 'disabled') {
                that.statusCurrent = null;
                that.statusDefault();
            }
        });

        jQuery(document).on('AppRoute.setRoute.before AppRoute.setRoute.error', function (event, suggestion) {
            that.statusDefault();
        });
    },
    getStatuses: function () {
        var statuses = [];
        jQuery.each(this.status, function (key, value) {
            statuses.push(value);
        });

        return statuses;
    },
    statusDefault: function () {
        jQuery(this.element.field).removeClass(this.getStatuses().join(' '));
        jQuery(this.element.field).find('input').prop('disabled', false);
    },
    statusLoading: function () {
        jQuery(this.element.field).removeClass(this.getStatuses().join(' ')).addClass(this.status.loading);
        jQuery(this.element.field).find('input').prop('disabled', true);
    },
    statusDisabled: function () {
        jQuery(this.element.field).removeClass(this.getStatuses().join(' ')).addClass(this.status.disabled);
        jQuery(this.element.field).find('input').prop('disabled', true);
    }
};