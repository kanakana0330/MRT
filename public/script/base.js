$(function(){
  var $_mainCont = $('.mainCont');
  var fadeSpeed = 1500;
  var intarval = 6000;
  var w = $(window).width();
  var breakPoint = 850;

  var init = function(){
    $_mainCont.children('.topImg').css({opacity:'0'});
    $_mainCont.children('.topImg').eq(0).stop().animate({opacity:'1',zIndex:'2'},fadeSpeed);
  }

  var changeImages = function(){
    setInterval(function(){
      $_mainCont.children('.topImg').eq(0).animate({opacity:'0'},fadeSpeed).next('.topImg').animate({opacity:'1'},fadeSpeed).end().appendTo($_mainCont);
    },intarval);
  }

  if(w > breakPoint){
    init();
    changeImages();
  }
  
});

