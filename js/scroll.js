// JavaScript Document
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 70) {
        $(".btpadding").addClass("topspace");
    } else {
        $(".btpadding").removeClass("topspace");
    }
});
