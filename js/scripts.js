$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:2
            },
            280:{
                items:1
            },
            768:{
                items:4
            },
            992:{
                items:5
            }
        }
    });
    $( function() {
        $( "#accordion" ).accordion();
    } );
    $("#accordion").accordion({
        heightStyle: "content"
    });
    $('#accordion').accordion({
        animate:{
            duration:1000,
            easing:'easeInOutSine'
        }
    });
    $( "#accordion" ).accordion({
        icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
    });


    (function($) { "use strict";

        var app = function () {
            var body = undefined;
            var menu = undefined;
            var menuItems = undefined;
            var init = function init() {
                body = document.querySelector('body');
                menu = document.querySelector('.menu-icon');
                menuItems = document.querySelectorAll('.nav__list-item');
                applyListeners();
            };
            var applyListeners = function applyListeners() {
                menu.addEventListener('click', function () {
                    return toggleClass(body, 'nav-active');
                });
            };
            var toggleClass = function toggleClass(element, stringClass) {
                if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
            };
            init();
        }();


        //Switch light/dark

        $("#switch").on('click', function () {
            if ($("body").hasClass("light")) {
                $("body").removeClass("light");
                $("#switch").removeClass("switched");
            }
            else {
                $("body").addClass("light");
                $("#switch").addClass("switched");
            }
        });

    })(jQuery);




});