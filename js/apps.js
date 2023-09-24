$(function(){

    $(window).scroll(function(){
       let scrollTopValue = $(window).scrollTop();

       if(scrollTopValue > 900){
        $('nav').addClass('menuFixed')
        $('.topBtn').fadeIn()
        
        } else {
        $('nav').removeClass('menuFixed');
        $('.topBtn').fadeOut()
        }
        
    })


    $(".topBtn").click(function(){
        $('html,body').animate({
            scrollTop: 0
        },3000)
    })

})

$(window).on('load',function(){
    $(".preloader").fadeOut();
})