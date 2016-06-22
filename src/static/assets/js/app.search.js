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
                xhr: AppAjax.progress
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
                jQuery(document).trigger('App.destination.selected', [suggestion]);
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

        jQuery(document).on('App.destination.selected', function (event, suggestion) {
            that.getRoute(suggestion.data);
        });

        jQuery('#routes').on('show.bs.collapse', function (event) {
            var element = jQuery(event.target).closest('.route'),
                walkingpath = jQuery(element).data('walkingpath');

            jQuery(document).trigger('AppSearch.routes.path', [walkingpath]);
        });
    },
    getRoute: function (destination) {
        var that = this;

        jQuery.ajax({
            url: '/api/route/',
            xhr: AppAjax.progress,
            data: {
                stopid: destination,
                longitude: function () {
                    return AppLocation.position.longitude;
                },
                latitude: function () {
                    return AppLocation.position.latitude;
                }
            },
            dataType: 'json',
            success: function (json) {
                that.statusDefault();

                if (json.error) {
                    AppError.show('request');
                }

                jQuery(document).trigger('AppSearch.before.routes');

                jQuery('#routes').empty();
                jQuery.each(json.data.routes, function (key, value) {
                    var id = 'route-' + value.id,
                        detailId = 'route-detail-' + value.id;

                    jQuery(document).trigger('AppSearch.routes.stop', [{
                        longitude: value.origin_stop.lng,
                        latitude: value.origin_stop.lat
                    }]);

                    jQuery('#routes').loadTemplate(jQuery('#template-route'), {
                        routeId: id,
                        originStop: value.origin_stop.name,
                        destinationStop: value.destination_stop.name,
                        duration: value.duration,
                        line: value.line.join(', '),
                        walkingDestination: JSON.stringify(value.walkingPath)
                    }, {
                        append: true,
                        noDivWrapper: true,
                        success: function () {
                            jQuery('#modal-routes-detail ul.stop-path').empty();
                            jQuery.each(value.path, function (key, value) {
                                jQuery('#modal-routes-detail').find('ul.stop-path').loadTemplate(jQuery('#template-route-detail'), {
                                    stopPathName: value.name
                                }, {
                                    append: true,
                                    noDivWrapper: true,
                                    success: function () {
                                        jQuery(document).trigger('AppSearch.after.routes');
                                    }
                                });
                            });
                        }
                    });
                });
            },
            error: function (e) {
                that.statusDefault();

                if (e.statusText == 'abort') {
                    return;
                }

                AppError.show('request');
            }
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