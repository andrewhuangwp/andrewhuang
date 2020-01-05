$(document).ready(function(){
    $(function(){
        var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);

        $('.sidenav a').each(function() {
        if ($(this).attr('href') == pathname)
        {
            $(this).addClass('current');
        }
        });
    });
});
