

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

function Profil_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_11': 'Profil_mobilebutton_11',
        'mobileworkarea_10': 'Profil_mobileworkarea_10',
        'mobiletextinput_25': 'Profil_mobiletextinput_25',
        'mobiletextinput_27': 'Profil_mobiletextinput_27',
        'mobiletextinput_26': 'Profil_mobiletextinput_26',
        'mobilecheckboxgroup_20': 'Profil_mobilecheckboxgroup_20',
        'mobilecheckbox_21': 'Profil_mobilecheckbox_21',
        'mobilebutton_33': 'Profil_mobilebutton_33',
        'mobilelist_3': 'Profil_mobilelist_3',
        'mobilelistitem_4': 'Profil_mobilelistitem_4',
        'mobilelistitembutton_5': 'Profil_mobilelistitembutton_5',
        'mobilelistitem_6': 'Profil_mobilelistitem_6',
        'mobilelistitembutton_7': 'Profil_mobilelistitembutton_7',
        'mobilelistitem_8': 'Profil_mobilelistitem_8',
        'mobilelistitembutton_9': 'Profil_mobilelistitembutton_9'
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

    Apperyio.CurrentScreen = 'Profil';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Profil_onLoad = function() {
            Profil_elementsExtraJS();

            Profil_deviceEvents();
            Profil_windowEvents();
            Profil_elementsEvents();
        };

    // screen window events


    function Profil_windowEvents() {

        $('#Profil').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Profil_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Profil_elementsExtraJS() {
        // screen (Profil) extra code

        /* mobilelist_3 */

        listView = $("#Profil_mobilelist_3");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#Profil_mobilelist_3 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_4 */

        /* mobilelistitem_6 */

        /* mobilelistitem_8 */

    };

    // screen elements handler


    function Profil_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Profil_mobileheader1 [name="mobilebutton_11"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="Profil_panel_menu"]').panel("open");

                }
            },
        }, '#Profil_mobileheader1 [name="mobilebutton_11"]');

        $(document).off("click", '#Profil_panel_menu [name="mobilelistitem_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#Profil_panel_menu [name="mobilelistitem_4"]');

        $(document).off("click", '#Profil_panel_menu [name="mobilelistitem_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('App', {
                        reverse: false
                    });

                }
            },
        }, '#Profil_panel_menu [name="mobilelistitem_6"]');

        $(document).off("click", '#Profil_panel_menu [name="mobilelistitem_8"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Profil', {
                        reverse: false
                    });

                }
            },
        }, '#Profil_panel_menu [name="mobilelistitem_8"]');

    };

    $(document).off("pagebeforeshow", "#Profil").on("pagebeforeshow", "#Profil", function(event, ui) {
        Apperyio.CurrentScreen = "Profil";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Profil_onLoad();
};

$(document).off("pagecreate", "#Profil").on("pagecreate", "#Profil", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Profil_js();
});