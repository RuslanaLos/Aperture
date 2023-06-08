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
            1000:{
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




});