$(document).ready(function () {
    /* Highlight Current Page*/
    $(function () {
        if (window.location.pathname == '/andrewhuang/') {
          $('#home-page').addClass('current');      
        }
        else {
            var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);
            $('nav a').each(function () {
            
                if ($(this).attr('href') == pathname) {
                    $(this).addClass('current');
                }
            });
        }
        
    });
    /* Determine font sizes of sidebar */
    $(function () {
        updateNav();
        $(window).resize(function () {
            updateNav();
        });
    });
    /* Resize Texts based on Window size*/
    function updateNav() {
        var w = $(window).width();
        /*Update sidebar to be horizontal if resized to a certain size*/
        if (w < 750) {
            $('nav h3').css("font-size", "18px");
            $('nav p').css("font-size", "12px");
            $('nav a').css("font-size", "14px");
        }
        /*Update sidebar to be vertical if resized to a certain size*/
        if (w >= 750) {
            $('nav h3').css("font-size", "32px");
            $('nav p').css("font-size", "16px");
            $('nav a').css("font-size", "25px");
        }
    }
    /* Determine size of resume*/
    $(function () {
        updateResume();
        $(window).resize(function () {
            updateResume();
        });
    });
    /* Change resume dimensions based on window dimensions*/
    function updateResume() {
        var resumeWidth = $(window).width();
        var resumeHeight = $(window).height();
        $('iframe').css("width", resumeWidth);
        $('iframe').css("height", resumeHeight);
    }
    /* Transitions */
    $("a").click(function () {
        $("main-body").fadeOut("slow");
    });
});
