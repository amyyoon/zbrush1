// gnb slide toggle

(function($) {
  var winW = $(window).outerWidth();
  var gnbBtn = $('.gnb_btn');
  var gnb = $('#gnb');

    if(winW < 480){
        gnbBtn.on('click',function(e) {
          gnb.stop().fadeToggle();
          $(this).children('button').toggleClass('active');
        });
    }else if(winW < 1366){
        gnbBtn.on('click',function(e) {
          gnb.stop().slideToggle();
          $(this).children('button').toggleClass('active');
        });
    }
})(jQuery);


// gnb li 마우스오버시, 하위메뉴 보여주기
 (function($) {
   var gnbLi = $('#gnb>ul>li');
   var gnbOl = gnbLi.find('ol')
   var gnbOlli = gnbOl.find('li');
   
   // console.log(i)


    gnbLi.children('a').on('mouseenter focus',function(e){
      var i = $(this);
      i.next('ol').stop().slideDown();
    });

    $('#gnb').on('mouseleave',function(){
      gnbOl.stop().slideUp();
    });

  $.each(gnbLi,function(i,v){
    $(this).find('a').eq(-1).on('blur',function(){
      gnbOl.stop().slideUp();
    });
  });

 })(jQuery);

