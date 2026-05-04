/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a.page-scroll').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    // Portfolio box mobile tap behavior
    $('.portfolio-box').on('click touchstart', function(event) {
        // Only apply on mobile devices (touch screens)
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            event.preventDefault();
            var $caption = $(this).find('.portfolio-box-caption');
            var href = $(this).attr('href');
            
            // Show the caption
            $caption.css('opacity', '1');
            
            // Navigate after 2 seconds
            setTimeout(function() {
                window.location.href = href;
            }, 2000);
        }
    });

})(jQuery); // End of use strict
