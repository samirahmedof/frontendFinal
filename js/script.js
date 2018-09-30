$(document).ready(function () {
    if ($(window).scrollTop() > 10) {
        $("header .heading").addClass("scrolled");
    }
    $(window).scroll(function (e) {
        if ($(this).scrollTop() > 10) {
            $("header .heading").addClass("scrolled");
        }
        else {
            $("header .heading").removeClass("scrolled");
        }
    })

    $("header .heading .lastLi a").click(function (e) {
        e.preventDefault();
        if ($(this).parent().hasClass(".active")) {
            $(this).parent().children(".search").css("opacity", "0");
            $(this).parent().removeClass(".active");
        }
        else {
            $(this).parent().children(".search").css("opacity", "1");
            $(this).parent().addClass(".active");
        }
    })

    $(".mySlider1").owlCarousel(
        {

            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 1000,
            nav: true



        }
    );
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
    if (screen.width >= 800) {
        $(".mySlider2").owlCarousel(
            {
                items: 3,
                loop: true,
                nav: true,
                dots: false

            });
    }
    else {
        $(".mySlider2").owlCarousel(
            {
                items: 1,
                loop: true,
                nav: true,
                dots: false

            });
    }

    if (screen.width >= 800) {

        $(".mySlider3").owlCarousel(
            {
                items: 2,
                loop: true,
                nav: true,
                dots: false

            }
        );
    }
    else {
        $(".mySlider3").owlCarousel(
            {
                items: 1,
                loop: true,
                nav: true,
                dots: false

            }
        );
    }
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $(".portfolio-item").isotope({
        itemSelectior: '.item',
        layoutMode: 'fitRows'
    });
    $(".portfolio-menu ul li").click(function () {
        $(".portfolio-menu ul li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter: selector
        });
        return false;
    })
    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $("#contact button").click(function (e) {
        e.preventDefault();
        var name = $("#contact .name").val();
        var mail = $("#contact .mail").val();
        var text = $("#contact textarea").val();
        var message = $("#contact .message");
        if (name == "") {
            message.text("Please enter your name.");
            message.css("display", "block");
        }
        else if (mail == "") {
            message.text("Please enter valid email adress.");
            message.css("display", "block");
        }
        else if (text == "") {
            message.text("Please enter your message.");
            message.css("display", "block");
        }
        else {
            $("#contact .after strong").text(`${name}`);
            $("#contact .body").addClass("deactive");
            $("#contact .after").removeClass("deactive");

        }

    })

});