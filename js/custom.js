(function ($) {

    $('document').ready(function () {
        $(window).scroll(function (e) {
            parallax();
        })


        function parallax() {
            var scroll = $(window).scrollTop();
            var screenHeight = $(window).height();

            $('.parallax').each(function () {
                var offset = $(this).offset().top;
                var distanceFromBottom = offset - scroll - screenHeight

                if (offset > screenHeight && offset) {
                    $(this).css('background-position', 'center ' + ((distanceFromBottom) * 0.2) + 'px');
                } else {
                    $(this).css('background-position', 'center ' + ((-scroll) * 0.2) + 'px');
                }
            })
        }
    });


    $('document').ready(function () {
        $(window).scroll(function (e) {
            parallax();
        })


        function parallax() {
            var scroll = $(window).scrollTop();
            var screenHeight = $(window).height();

            $('.parallax2').each(function () {
                var offset = $(this).offset().right;
                var distanceFromBottom = offset + scroll + screenHeight

                if (offset > screenHeight && offset) {
                    $(this).css('background-position', 'left ' + ((distanceFromBottom) * 0.2) + 'px');
                } else {
                    $(this).css('background-position', 'center ' + ((-scroll) * 0.4) + 'px');
                }
            })
        }
    });
    
    
    
    
    $('document').ready(function () {
        $(window).scroll(function (e) {
            parallax();
        })


        function parallax() {
            var scroll = $(window).scrollTop();
            var screenHeight = $(window).height();

            $('.parallax3').each(function () {
                var offset = $(this).offset().top;
                var distanceFromBottom = offset - scroll - screenHeight

                if (offset > screenHeight && offset) {
                    $(this).css('background-position', 'center ' + ((distanceFromBottom) * 0.2) + 'px');
                } else {
                    $(this).css('background-position', 'top ' + ((-scroll) * 0.2) - 'px');
                }
            })
        }
    });



})(jQuery)
