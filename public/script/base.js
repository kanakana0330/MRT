$(function(){
  var $_mainCont = $('.mainCont');
  var fadeSpeed = 1500;
  var intarval = 6000;

  $_mainCont.children('.topImg').css({opacity:'0'});
  $_mainCont.children('.topImg').eq(0).stop().animate({opacity:'1',zIndex:'2'},fadeSpeed);

  setInterval(function(){
    $_mainCont.children('.topImg').eq(0).animate({opacity:'0'},fadeSpeed).next('.topImg').animate({opacity:'1'},fadeSpeed).end().appendTo($_mainCont);
  },intarval);

});

