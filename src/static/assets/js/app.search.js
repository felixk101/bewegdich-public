jQuery(document).ready(function () {
    AppSearch.init();
});

var AppSearch = {
    element: {
        field: '#search .search-field'
    },
    init: function () {
        var that = this;

        jQuery('#search #s').autocomplete({
            serviceUrl: '/api/getStopList/',
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

        jQuery(document).on('App.destination.selected', function (event, suggestion) {
            that.getRoute(suggestion.data);
        });

        jQuery('#routes').on('show.bs.collapse', function (event) {
            var element = jQuery(event.target).closest('.route'),
                walkingpath = jQuery(element).data('walkingpath');

            AppMap.setRoute(walkingpath);
        });
    },
    getRoute: function (destination) {
        var that = this;

        jQuery.ajax({
            url: '/api/getRoute/',
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

                jQuery(document).trigger('App.before.routes');

                jQuery('#routes').empty();
                jQuery.each(json.data.routes, function (key, value) {
                    var id = 'route-' + value.id,
                        detailId = 'route-detail-' + value.id;

                    jQuery(document).trigger('App.routes.stop', [{
                        longitude: value.origin_stop.lng,
                        latitude: value.origin_stop.lat
                    }]);

                    jQuery('#routes').loadTemplate(jQuery('#template-route'), {
                        panelId: id,
                        panelDetailId: detailId,
                        panelDetailTarget: '#' + detailId,
                        originStop: value.origin_stop.name,
                        destinationStop: value.destination_stop.name,
                        duration: value.duration,
                        line: value.line.join(', '),
                        walkingPath: JSON.stringify(value.walkingPath)
                    }, {
                        append: true,
                        noDivWrapper: true,
                        success: function () {
                            jQuery.each(value.path, function (key, value) {
                                jQuery('#' + detailId).find('ul.stop-path').loadTemplate(jQuery('#template-route-detail'), {
                                    stopPathName: value.name
                                }, {
                                    append: true,
                                    noDivWrapper: true,
                                    success: function () {
                                        jQuery(document).trigger('App.after.routes');
                                    }
                                });
                            });
                        }
                    });
                });
            },
            error: function (e) {
                that.statusDefault();

                AppError.show('request');
            }
        });
    },
    statusLoading: function () {
        jQuery(this.element.field).addClass('loading');
        jQuery(this.element.field).find('input').prop('disabled', true);
    },
    statusDefault: function () {
        jQuery(this.element.field).removeClass('loading');
        jQuery(this.element.field).find('input').prop('disabled', false);
    }
};