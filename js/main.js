$(document).ready(function() {

            var scrollButton = $("#tap-up");
            $(window).scroll(function() {
                if ($(this).scrollTop() >= 330) {
                    scrollButton.show();
                } else {
                    scrollButton.hide();
                }
            });

            scrollButton.click(function() {
                $("html,body").animate({
                    scrollTop: 0
                }, 600);
            });
                
        $('.our ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') === 'all') {
            $('.shuffle .col-md-4').css('opacity', 1);
        } else {
            $('.shuffle .col-md-4').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1);
        }

    });
    
    $(window).on("scroll", function () {
       
        if ($(this).scrollTop() >= 600) {
            
            $("nav").removeClass("trns-nav").addClass("black-nav");
        } else {
            $("nav").removeClass("black-nav").addClass("trns-nav");
        }
        
        $("header, section").each(function () {
           
            if ($(window).scrollTop() >= $(this).offset().top) {
                    var blockId = $(this).attr("id");
                    $("nav a").removeClass("active");
                    $('nav ul li a[data-links="' + "#" + blockId + '"]').addClass("active");
                }
        });
    });
    
    $("nav ul li a").click(function (e) {
        
        e.preventDefault();
        
        $("nav a").removeClass("active");
        
        $(this).addClass("active");
        
        $("body, html").animate({
            
            scrollTop: $($(this).data("links")).offset().top + 1
        }, 600);
    });



        });