var pContainerHeight = $('.cake-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.back-cake').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.fore-cake').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });

  }

});
