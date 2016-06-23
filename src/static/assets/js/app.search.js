jQuery(document).ready(function () {
    AppSearch.init();
});

var AppSearch = {
    element: {
        search: '#search',
        field: '#search .search-field'
    },
    duration: {
        show: 500,
        hide: 250
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

        jQuery(document).on('AppRoute.set.before AppRoute.set.error', function (event, suggestion) {
            that.statusDefault();
        });

        jQuery(document).on('AppNavigation.after.start', function () {
            that.hide();
        });

        jQuery(document).on('AppNavigation.after.stop', function () {
            that.show();
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
    },
    show: function () {
        jQuery(this.element.search).fadeIn(this.duration.show);
    },
    hide: function () {
        jQuery(this.element.search).fadeOut(this.duration.hide);
    }
};