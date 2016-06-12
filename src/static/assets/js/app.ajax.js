var AppAjax = {
    element: {
        progress: '#ajax-progress'
    },
    progress: function () {
        var xhr = new window.XMLHttpRequest();

        xhr.upload.addEventListener("progress", function (event) {
            if (event.lengthComputable) {
                jQuery(AppAjax.element.progress).attr('max', event.total);
                jQuery(AppAjax.element.progress).val(event.loaded);

                if (event.loaded == event.total) {
                    jQuery(AppAjax.element.progress).val('');
                }
            }
        }, false);

        xhr.addEventListener("progress", function (event) {
            if (event.lengthComputable) {
                jQuery(AppAjax.element.progress).attr('max', event.total);
                jQuery(AppAjax.element.progress).val(event.loaded);

                if (event.loaded == event.total) {
                    jQuery(AppAjax.element.progress).val('');
                }
            }
        }, false);

        return xhr;
    }
};