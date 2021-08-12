$(document).ready(function() {
    $(window).bind("scroll", function () {
        $(window).scrollTop() > 10 ? $(".main").addClass("fixed-top1 fadeInDown") : $(".main").removeClass("fixed-top1 fadeInDown")
    }), 
    
    $(window).bind("scroll", function () {
        $(window).scrollTop() > 200 ? $(".ft_up").addClass("d_block fadeInUp") : $(".ft_up").removeClass(" d_block fadeInUp")
    }), 
    
    
    $(".project-slider-area").owlCarousel({
        navigation: !0,
        loop: false,
        dots:true,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        margin: 10,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0,
                loop: !0
            },
            600: {
                items: 1,
                nav: !1,
                loop: !0
            },
            1000: {
                items: 3,
                nav: !0,
                loop: !0,
                margin: 20
            }
        }
    }),

    $(".extra-fields-city").click(function() {
        $(".city_records").clone().appendTo(".city_records_dynamic"),
         $(".city_records_dynamic .city_records").addClass("single remove"),
          $(".single .extra-fields-city").remove(),
           $(".single").append('<a href="#" class="remove-field btn-remove-customer heading-add red-c"> <span class="material-icons f-16"> close </span> Remove </a>'),
        
        $(".city_records_dynamic > .single").attr("class", "remove"), $(".city_records_dynamic input").each(function() {
            var e = 0,
                t = $(this).attr("name");
            $(this).attr("name", t + e), e++
        })
    }),
    
    $(document).on("click", ".remove-field", function(e) {
        $(this).parent(".remove").remove(), e.preventDefault()
    }),
    $(".detail_sl-area").owlCarousel({
        navigation: !0,
        loop: false,
        dots:true,
        autoplay: true,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        margin: 10,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0,
                loop: !0,dots:true,
            },
            600: {
                items: 1,
                nav: !1,
                loop: !0,dots:true,
            },
            1000: {
                items: 1,
                nav: !0,
                loop: !0,
                margin: 20,dots:true,
            }
        }
    }),
    

    
    
    $(".who_work").owlCarousel({
        navigation: !0,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        margin: 5,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0,
                loop: !0
            },
            600: {
                items: 1,
                nav: !1,
                loop: !0
            },
            1000: {
                items: 4.5,
                nav: !0,
                loop: !0,
                margin: 20
            }
        }
    }), $(".gallery_slider").owlCarousel({
        navigation: !0,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        margin: 5,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0,
                loop: !0
            },
            600: {
                items: 1,
                nav: !1,
                loop: !0
            },
            1000: {
                items: 3,
                nav: !0,
                loop: !0,
                margin: 20
            }
        }
    }), $(".client_slider").owlCarousel({
        navigation: !0,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !1,
        margin: 10,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0,
                loop: !0
            },
            600: {
                items: 1,
                nav: !1,
                loop: !0
            },
            1000: {
                items: 6,
                nav: !0,
                loop: !0,
                margin: 20
            }
        }
    }), $(".clint_test_slide").owlCarousel({
        navigation: !0,
        pagination: !1,
        loop: !0,
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !1,
        margin: 10,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1.1,
                nav: !0,
                loop: !0
            },
            600: {
                items: 1,
                nav: !1,
                loop: !0
            },
            1000: {
                items: 3,
                nav: !0,
                loop: !0,
                margin: 20
            }
        }
    }),
 

    $(".project-slider-area5").owlCarousel({
        navigation: !0,
        loop: false,
        dots:true,
        autoplay: false,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        margin: 10,
        responsiveClass: !0,
        dots:true,
        responsive: {
            0: {
                items: 1.1,
                nav: !0,
                loop: !0
            },
            600: {
                items: 1.5,
                nav: !1,
                loop: !0
            },
            1000: {
                items: 3,
                nav: !0,
                loop: !0,
                margin: 20
            }
        }
    }),
    
    $(".project-slider-area6").owlCarousel({
        navigation: !0,
        loop: false,
        dots:true,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        margin: 10,
        responsiveClass: !0,
        dots:true,
        responsive: {
            0: {
                items: 1.4,
                nav: !0,
                loop: !0
            },
            600: {
                items: 1.5,
                nav: !1,
                loop: !0
            },
            1000: {
                items: 3,
                nav: !0,
                loop: !0,
                margin: 20
            }
        }
    }),
    
    
    
    
    
    
    
    $(".testi_slider-area").owlCarousel({
        navigation: !0,
        pagination: !1,
        loop: !0,
        margin: 10,
        nav: !1,
        navText: ['<span class="fas fa-chevron-left fa fa-angle-left fa-3x"></span>', '<span class="fas fa-chevron-left fa fa-angle-right fa-3x"></span>'],
        autoPlay: !0,
        slideSpeed: 1e3,
        autoPlayTimeout: 1e3,
        autoPlayHoverPause: !1,
        items: 2,
        itemsMobile: [479, 1],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    }),
     $(".client-slider").owlCarousel({
        navigation: !0,
        pagination: !1,
        loop: !0,
        margin: 10,
        nav: !1,
        navText: ['<span class="fas fa-chevron-left fa fa-angle-left fa-3x"></span>', '<span class="fas fa-chevron-left fa fa-angle-right fa-3x"></span>'],
        autoPlay: !0,
        slideSpeed: 1e3,
        autoPlayTimeout: 1e3,
        autoPlayHoverPause: !1,
        items: 6,
        itemsMobile: [479, 1],
        responsive: {
            0: {
                items: 1.2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    }),
    

    
    
    $(".next").click(function() {
        return $(".carousel").carousel("next"), !1
    }), $(".prev").click(function() {
        return $(".carousel").carousel("prev"), !1
    });
    var e = $(".navbar-collapse  a");
    e.on("click", function() {
        e.removeClass("active"), $(this).addClass("active")
    })
}), (new WOW).init(), window.onload = function() {
    window.jQuery ? $(document).ready(function() {
        $(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show(), $("body").append("<div class='overlay'></div>"), $(".navbar-toggle, .navbar-toggler").on("click", function() {
            $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass")), $(".sideMenu, .overlay").toggleClass("open"), $(".overlay").on("click", function() {
                $(this).removeClass("open"), $(".sideMenu").removeClass("open")
            })
        }), $("body").on("click", ".sideMenu.open .nav-item", function() {
            $(this).hasClass("dropdown") || $(".sideMenu, .overlay").toggleClass("open")
        }), $(window).resize(function() {
            $(".navbar-toggler").is(":hidden") ? $(".sideMenu, .overlay").hide() : $(".sideMenu, .overlay").show()
        })
    }) : console.log("sidebarNavigation Requires jQuery");
    for (var e = document.getElementsByClassName("typewrite"), a = 0; a < e.length; a++) {
        var o = e[a].getAttribute("data-type"),
            s = e[a].getAttribute("data-period");
        o && new TxtType(e[a], JSON.parse(o), s)
    }
    var n = document.createElement("style");
    n.type = "text/css", n.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}", document.body.appendChild(n)
};