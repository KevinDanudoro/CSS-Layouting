$(window).scroll(function () { 
  // this mengacu pada window
  const windowScroll = $(this).scrollTop();

  $('h1').css({
    'transform': `translate(0px, ${windowScroll/1.2}px)`
  });

  $('.kotak').css({
    'transform': `translate(0px, ${windowScroll/1.5}px)`
  });

  $('p').css({
    'transform': `translate(0px, ${windowScroll/1.7}px)`
  });

});