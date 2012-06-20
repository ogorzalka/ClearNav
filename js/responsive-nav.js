;(function($) {
    "use strict";
    $(document).ready(function() {
        $('#access').on('touchstart click', '.skip-link', function(event) {
            $(this).toggleClass('focus');
            $($(this).attr('href')).toggleClass('target');
            event.preventDefault();
        }).find('.skip-link').append('<span>'+$('#menu .active').text()+'</span>');
    });
})(jQuery);