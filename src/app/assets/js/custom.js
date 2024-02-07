$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.header').addClass('FixedHeader');
    } else {
       $('.header').removeClass('FixedHeader');
    }
});


alert("Dfdf")