$(document).ready(function(){
    /* Highlight Current Page*/
    $(function(){
        var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);

        $('.sidenav a').each(function() {
        if ($(this).attr('href') == pathname)
        {
            $(this).addClass('current');
        }
        });
    });
    /* Resize Texts based on Window size*/
    $(window).resize(function() {
        var h = $(window).height();
        var w = $(window).width();
         
        /*Update sidebar to be horizontal if resized to a certain size*/
        if((h/w)>0.61) {
            $('.sidenav h3').css("font-size", "18px");
            $('.sidenav p').css("font-size", "12px");
            $('.sidenav a').css("font-size", "14px");
        }
        /*Update sidebar to be vertical if resized to a certain size*/
        if((h/w)<0.61) {
            $('.sidenav h3').css("font-size", "32px");
            $('.sidenav p').css("font-size", "16px");
            $('.sidenav a').css("font-size", "25px");
        }
    });
});