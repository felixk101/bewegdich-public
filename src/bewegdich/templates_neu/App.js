

Apperyio.getProjectGUID = function() {
    return 'cc7077cf-0af3-4e5a-af36-a46381c89403';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "Home",
    "location": "Home.html"
}, {
    "name": "Profil",
    "location": "Profil.html"
}, {
    "name": "App",
    "location": "App.html"
}];

function App_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_11': 'App_mobilebutton_11',
        'mobileworkarea_10': 'App_mobileworkarea_10',
        'mobileradiogroup_40': 'App_mobileradiogroup_40',
        'currentCity_Augsburg': 'App_currentCity_Augsburg',
        'currentCity_Basel': 'App_currentCity_Basel',
        'mobilegrid_25': 'App_mobilegrid_25',
        'mobilegridcell_26': 'App_mobilegridcell_26',
        'start_label': 'App_start_label',
        'mobilegridcell_27': 'App_mobilegridcell_27',
        'start_input': 'App_start_input',
        'mobilegridcell_28': 'App_mobilegridcell_28',
        'destination_label': 'App_destination_label',
        'mobilegridcell_29': 'App_mobilegridcell_29',
        'destination_input': 'App_destination_input',
        'submit_button': 'App_submit_button',
        'show_map': 'App_show_map',
        'Mapmarker': 'App_Mapmarker',
        'mobilelist_3': 'App_mobilelist_3',
        'mobilelistitem_4': 'App_mobilelistitem_4',
        'mobilelistitembutton_5': 'App_mobilelistitembutton_5',
        'mobilelistitem_6': 'App_mobilelistitem_6',
        'mobilelistitembutton_7': 'App_mobilelistitembutton_7',
        'mobilelistitem_8': 'App_mobilelistitem_8',
        'mobilelistitembutton_9': 'App_mobilelistitembutton_9'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'App';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var App_onLoad = function() {
            App_elementsExtraJS();

            App_deviceEvents();
            App_windowEvents();
            App_elementsEvents();
        };

    // screen window events


    function App_windowEvents() {

        $('#App').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function App_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function App_elementsExtraJS() {
        // screen (App) extra code

        /* show_map */

        $("[name = 'show_map']").wrap("<div/>");
        $("[name = 'show_map']").parent().css("margin-left", $("[name = 'show_map']").css("margin-left"));
        $("[name = 'show_map']").parent().css("margin-right", $("[name = 'show_map']").css("margin-right"));
        $("[name = 'show_map']").css("margin-left", '0');
        $("[name = 'show_map']").css("margin-right", '0');

        var show_map_options = {
            markerSourceName: "show_map_markers",
            latitude: "48.358330",
            longitude: "10.905818",
            address: "Augsburg, Germany",
            zoom: 10,
            showLocationMarker: false
        }

        Apperyio.__registerComponent('show_map', new Apperyio.ApperyMapComponent("show_map", show_map_options));
        $("[name='show_map_markers'] [apperytype='marker']").attr("reRender", "show_map");
        $(":mobile-pagecontainer").off("pagecontainershow.App_mobilecontainer1").on("pagecontainershow.App_mobilecontainer1", function(event, ui) {
            if (($('#App_show_map', ui.toPage).length > 0) && (Apperyio('show_map') != undefined)) {
                Apperyio('show_map').refresh();
            }
        });

        /* mobilelist_3 */

        listView = $("#App_mobilelist_3");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#App_mobilelist_3 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_4 */

        /* mobilelistitem_6 */

        /* mobilelistitem_8 */

    };

    // screen elements handler


    function App_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#App_mobileheader1 [name="mobilebutton_11"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="App_panel_menu"]').panel("open");

                }
            },
        }, '#App_mobileheader1 [name="mobilebutton_11"]');

        $(document).off("change", '#App_mobilecontainer1 [name="mobileradiogroup_40"]').on({
            change: function(event) {
                setAttribute_('App', 'currentCity', 'Augsburg');
                $('[id="App"]').refresh();
            },
        }, '#App_mobilecontainer1 [name="mobileradiogroup_40"]');
        $(document).off("click", '#App_mobilecontainer1 [name="currentCity_Augsburg"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    setAttribute_('App_currentCity_Basel', 'checked', 'false');
                    $('[id="App_currentCity_Basel"]').refresh();
                    setAttribute_('App_currentCity_Augsburg', 'checked', 'true');
                    $('[id="App_currentCity_Augsburg"]').refresh();

                }
            },
        }, '#App_mobilecontainer1 [name="currentCity_Augsburg"]');
        $(document).off("click", '#App_mobilecontainer1 [name="currentCity_Basel"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    setAttribute_('App_currentCity_Augsburg', 'checked', 'false');
                    $('[id="App_currentCity_Augsburg"]').refresh();
                    setAttribute_('App_currentCity_Basel', 'checked', 'true');
                    $('[id="App_currentCity_Basel"]').refresh();

                }
            },
        }, '#App_mobilecontainer1 [name="currentCity_Basel"]');

        $(document).off("click", '#App_panel_menu [name="mobilelistitem_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#App_panel_menu [name="mobilelistitem_4"]');

        $(document).off("click", '#App_panel_menu [name="mobilelistitem_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('App', {
                        reverse: false
                    });

                }
            },
        }, '#App_panel_menu [name="mobilelistitem_6"]');

        $(document).off("click", '#App_panel_menu [name="mobilelistitem_8"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Profil', {
                        reverse: false
                    });

                }
            },
        }, '#App_panel_menu [name="mobilelistitem_8"]');

    };

    $(document).off("pagebeforeshow", "#App").on("pagebeforeshow", "#App", function(event, ui) {
        Apperyio.CurrentScreen = "App";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    App_onLoad();
};

$(document).off("pagecreate", "#App").on("pagecreate", "#App", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    App_js();
});