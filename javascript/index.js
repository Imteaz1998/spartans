$(document).ready(function(){
    $(".nav-icon").click(function(){
        $(".full-nav").addClass("open");
    });
    $(".nav-close").click(function(){
        $(".full-nav").removeClass("open");
    });
    $(window).scroll(function(){
        var sc =$(window).scrollTop();
        if( sc > 100){
            $(".nav").addClass("sticky");
        }
        else{
            $(".nav").removeClass("sticky");
        }
       
    })
    $('.bxslider').bxSlider({
        mode:'horizontal',
        moveSlides:1,
        slideMargin:40,
        infiniteLoop:true,
        minSlides:1,
        maxSlides:1,
        speed:1200,

    });
    
});
$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
    // For Demo Purpose [Changing input group text on focus]
$(function () {
    $('input, select').on('focus', function () {
        $(this).parent().find('.input-group-text').css('border-color', '#80bdff');
    });
    $('input, select').on('blur', function () {
        $(this).parent().find('.input-group-text').css('border-color', '#ced4da');
    });
});
setTimeout(function(){

    $(".loader_bg").fadeToggle();
}, 1500

);
});
setTimeout(function(){

    $(".loader_bg").fadeToggle();
}, 1500

); 
$(window).on("load",function(){

$(".loader_bg").fadeOut("slow");


});