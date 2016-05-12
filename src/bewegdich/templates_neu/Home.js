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

function Home_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_11': 'Home_mobilebutton_11',
        'mobileworkarea_10': 'Home_mobileworkarea_10',
        'header1': 'Home_header1',
        'text_startscreen': 'Home_text_startscreen',
        'owner': 'Home_owner',
        'mobilelist_3': 'Home_mobilelist_3',
        'mobilelistitem_4': 'Home_mobilelistitem_4',
        'mobilelistitembutton_5': 'Home_mobilelistitembutton_5',
        'mobilelistitem_6': 'Home_mobilelistitem_6',
        'mobilelistitembutton_7': 'Home_mobilelistitembutton_7',
        'mobilelistitem_8': 'Home_mobilelistitem_8',
        'mobilelistitembutton_9': 'Home_mobilelistitembutton_9'
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

    Apperyio.CurrentScreen = 'Home';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Home_onLoad = function() {
            Home_elementsExtraJS();

            Home_deviceEvents();
            Home_windowEvents();
            Home_elementsEvents();
        };

    // screen window events


    function Home_windowEvents() {

        $('#Home').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Home_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Home_elementsExtraJS() {
        // screen (Home) extra code

        /* mobilelist_3 */

        listView = $("#Home_mobilelist_3");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#Home_mobilelist_3 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_4 */

        /* mobilelistitem_6 */

        /* mobilelistitem_8 */

    };

    // screen elements handler


    function Home_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Home_mobileheader1 [name="mobilebutton_11"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="Home_panel_menu"]').panel("open");

                }
            },
        }, '#Home_mobileheader1 [name="mobilebutton_11"]');

        $(document).off("click", '#Home_panel_menu [name="mobilelistitem_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#Home_panel_menu [name="mobilelistitem_4"]');

        $(document).off("click", '#Home_panel_menu [name="mobilelistitem_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('App', {
                        reverse: false
                    });

                }
            },
        }, '#Home_panel_menu [name="mobilelistitem_6"]');

        $(document).off("click", '#Home_panel_menu [name="mobilelistitem_8"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Profil', {
                        reverse: false
                    });

                }
            },
        }, '#Home_panel_menu [name="mobilelistitem_8"]');

    };

    $(document).off("pagebeforeshow", "#Home").on("pagebeforeshow", "#Home", function(event, ui) {
        Apperyio.CurrentScreen = "Home";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Home_onLoad();
};

$(document).off("pagecreate", "#Home").on("pagecreate", "#Home", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Home_js();
});