
//头部吸顶效果
jQuery($=>{
    $('.my-order').on('mouseenter',function(){
        $(this).addClass('hover').find('em').animate({backgroundPosition:0},300)
    });

    $('.my-order').on('mouseleave',function(){
        $(this).removeClass('hover').find('em').animate({backgroundPosition:-15},300)
    });

    window.onscroll = function(){
        var scrollY = window.scrollY;

        if(scrollY>=$('.top-logo').outerHeight()){
            $('.top-logo').addClass('logo-top');
            $('.top-bar').addClass('msp');
        }else{
            $('.top-logo').removeClass('logo-top');
            $('.top-bar').removeClass('msp');
        }

    }
})