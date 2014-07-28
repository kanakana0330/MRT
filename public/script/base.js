$(function(){
  var d = new Date();
  $('.year').html(d.getFullYear());
});

var topPageGallary = function(){
  var $_mainCont = $('.mainCont');

  var fadeSpeed = 1500;
  var intarval = 6000;

  var breakPoint = 850;
  var designFlg = 0;
  var w;

  var timer =false;
  var before = 0, after = 0;


  var changeImages = function(){
    $_mainCont.children('.topImg').css({opacity:'0'});
    $_mainCont.children('.topImg').eq(0).stop().animate({opacity:'1',zIndex:'2'},fadeSpeed);

    setInterval(function(){
      $_mainCont.children('.topImg').eq(0).animate({opacity:'0'},fadeSpeed).next('.topImg').animate({opacity:'1'},fadeSpeed).end().appendTo($_mainCont);
    },intarval);
  }

  var judgeBreakPoint = function(){
    w = $(window).width();
    before = w;

    if(w > breakPoint){
      changeImages();
      designFlg = 1;
    } else {
      if(designFlg == 1){
        location.reload();
      }
      flg = 0;
    }
  }

  //initialize, if orientationchange event.
  $(window).on('orientationchange', judgeBreakPoint);

  //initialize, if the browser pass over `breakpoint`.
  $(window).resize(function() {
    var x = 0;

    if (timer !== false){
      clearTimeout(timer);
    }

    timer = setTimeout(function(){
      timer =true;
      after = $(window).width();
      x = (before - breakPoint) * (after - breakPoint);
      if(x < 0){
        judgeBreakPoint();
      }
      before = after;
    },100);

  });

  //initialize, onload.
  judgeBreakPoint();
}


