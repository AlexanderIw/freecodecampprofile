/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar-custom').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar-custom').addClass("scrolled");
        //alert("class ever get added");
    }else{
        $('.navbar-custom').removeClass("scrolled");
    }
}

if($('.navbar-custom').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}