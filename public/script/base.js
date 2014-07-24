$(function(){
  var $_mainCont = $('.mainCont');

  var fadeSpeed = 1500;
  var intarval = 6000;

  var breakPoint = 850;
  var flg = 0;

  var changeImages = function(){
    $_mainCont.children('.topImg').css({opacity:'0'});
    $_mainCont.children('.topImg').eq(0).stop().animate({opacity:'1',zIndex:'2'},fadeSpeed);

    setInterval(function(){
      $_mainCont.children('.topImg').eq(0).animate({opacity:'0'},fadeSpeed).next('.topImg').animate({opacity:'1'},fadeSpeed).end().appendTo($_mainCont);
    },intarval);
  }

  var judgeBreakPoint = function(){
    var w = $(window).width();

    if(w > breakPoint){
      changeImages();
      flg = 1;
    } else {
      if(flg == 1){
        location.reload();
      }
      flg = 0;
    }
  }

  $(window).on('orientationchange', judgeBreakPoint);

  judgeBreakPoint();

  
});

