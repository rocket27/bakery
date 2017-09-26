$(document).ready(function() {
    
    $('a[href^="#"]').click(function() {
        
        var elementClick = $(this).attr("href"),
            destination = $(elementClick).offset().top;

            $('html,body').animate({
                scrollTop: destination
            }, 2000);

            return false;
    });
});