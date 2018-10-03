//zbrush_tutorial.js


// tutorial mouseenter시, addClass로 글씨 보이게!

(function($){
  var tuto = $('.inBox').children('li');
  var tutoPic = tuto.find('dl');
  var tutoT= tutoPic.find('dt');
  var tutoSubT=tutoPic.find('dd');
  var winW = $(window).outerWidth(true);

  $(window).on('load', function(){
    var nowW = $(window).outerWidth();
    console.log(nowW);

  if (nowW > 768){
    tuto.children('a').on('mouseenter focus click',function(e){
    e.preventDefault();
    var i = $(this).index();
    $(this).addClass('active');
    // tutoPic.eq(i).addClass('me2');
    $(this).on('keyup',function(e){
      var key = e.key.toLowerCase();
      console.log(key);
      var keAr = ['arrowright', 'arrowdown','arrowup','arrowleft'];
      switch(key){
        case keAr[0]:
        case keAr[1]:
        $(this).parent().next('li').children('a').focus();
        break;
        case keAr[2]:
        case keAr[3]:
        $(this).parent().prev('li').children('a').focus();
        break;
      }
    }); 
  });
  tuto.children('a').on('mouseleave blur',function(){
    $(this).removeClass('active');
  });}
  else{
    tuto.children('a').on('mouseenter focus click',function(e){
    e.preventDefault();
    var i = $(this).index();
    $(this).addClass('active');
    tuto.children('a').on('mouseleave blur',function(){
    $(this).removeClass('active');
  });
 }
 )};
});




})(jQuery);



//  tabMenu_01.js
(function($){

  // .tab_box 내의 li클릭시
  var tabBox  = $('.tab_box');
  var tabLi   = tabBox.find('li');
  var tabText = $('.tab_text').children('div');

  tabLi.on('click',function(e) {
    e.preventDefault();
   var i = $(this).index();

   // 선택한 li에 .select적용
   tabLi.eq(i).addClass('select');
   tabLi.eq(i).siblings().removeClass('select');

  // tab_text내의 순서에맞는 내용에 .select적용
   tabText.eq(i).addClass('select');
   tabText.eq(i).siblings().removeClass('select');
  });
})(jQuery);