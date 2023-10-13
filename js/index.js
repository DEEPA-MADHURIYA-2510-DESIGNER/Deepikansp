//Navbar Scrolling Effect
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".header").css("background", "white");
            $(".header").css("box-shadow","0 10px 11px rgba(0,0,0,0.4)");
            $(".header h1").css("color","black");
            $(".header h4").css("color","black");
        }
        else {
            $(".header").css("background", "transparent");
            $(".header").css("box-shadow","0 0px 0px rgba(0,0,0,0.4)");
            $(".header h1").css("color","white");
            $(".header h4").css("color","white");
        }

        if($(this).scrollTop() < 200){
            $('.stickfoot').fadeOut();
        }
        else{
            $('.stickfoot').fadeIn();
        }
    });
    $('.stickfoot').fadeOut();
});