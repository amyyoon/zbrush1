// zbrush_main.js

// Display a loading icon until the page loads completely
/*(function($){

  var loader = $('.loader');
  var icon = loader.children('i');
   var video = $('#fullVideo');

  $(window).on('load',function(e){
    e.preventDefault();
    icon.fadeOut();
  });
})(jQuery);*/


//#userBox에 landing 으로 보여주기

(function($){

    $(window).on('load',function(e){
    $('.loading').fadeOut(function(){
      $(this).remove();
    });
  });

  var userBox = $('#userBox');
  var userH2 = userBox.find('h2');
  var userH3 = userBox.find('p');
  var userH2off = userH2.offset().top;

  var winH = $(window).outerHeight(true);

  var userUl= $('.userList');
  var userLi1=userUl.children('li:eq(0)');
  var userLi1off = userLi1.offset().top;

  var userLi2=userUl.children('li:eq(1)');
  var userLi2off = userLi2.offset().top;

  var userPic1= userLi1.children('div');
  var userPic2= userLi2.children('div');
  var userBox1= userLi1.find('dl');
  var userBox2= userLi2.find('dl');

  var H = winH/2;
  var H1 = winH/4*3;
  // console.log(userH2off-H);


  $(window).on('scroll',function(){
    var nowTop = $(window).scrollTop();
    console.log(nowTop);

    if (nowTop >= userH2off-H){
      userH2.addClass('h2Show');
      userH3.addClass('pShow');
    } else{
      userH2.removeClass('h2Show');
      userH3.removeClass('pShow');
    }
//----------------------------------
    if (nowTop >= userLi1off-H1){
      userPic1.addClass('userPic1Show');
    } else {
      userPic1.removeClass('userPic1Show');
    }

    if (nowTop >= userLi2off-H1){
      userPic2.addClass('userPic2Show');
    } else{
      userPic2.removeClass('userPic2Show');
    }
  
//---------------------------------------
    if (nowTop >= userLi1off-H1){
      userBox1.addClass('userBox1Show');
    } else{
      userBox1.removeClass('userBox1Show');
    }

    if (nowTop >=userLi2off-H1){
      userBox2.addClass('userBox2Show');
    } else{
      userBox2.removeClass('userBox2Show');
    }
  });
})(jQuery);


//#featureBox 에 landing 으로 보여주기 

(function($){
  var feature = $('#featureBox');
  var featureH2 = feature.find('h2');
  var featureoffsetT = featureH2.offset().top;
  var winH = $(window).outerHeight(true);

  var featureBox = $('.featureList');
  var featureBoxoffsetT = featureBox.offset().top;
  var featureBoxE = featureBox.children('li');

  var myH = winH/4*3;
  var myH1 = winH/2;
  // console.log(galleryoffsetT-myH);
  $(window).on('scroll', function(){
    var nowTop = $(window).scrollTop();
    // console.log(nowTop);


    if (nowTop >= featureoffsetT-myH){

      featureH2.addClass('this');

    }else{
      featureH2.removeClass('this');}
    // -----------------------------------

    if (nowTop >= featureBoxoffsetT-myH1){
      featureBoxE.addClass('this01');
    }else{
      featureBoxE.removeClass('this01');
    }

  });

})(jQuery);




//#galleryBox 에 landing 으로 보여주기 

(function($){
  var gallery = $('#galleryBox');
  var galleryH2 = gallery.find('p');
  var galleryoffsetT = galleryH2.offset().top;
  var winH = $(window).outerHeight(true);

  var galleryBox = $('.gallery');
  var galleryBoxoffsetT = galleryBox.offset().top;
  var galleryBoxO = galleryBox.children('li:nth-child(even)');
  var galleryBoxE = galleryBox.children('li:nth-child(odd)');

  var myH = winH/4*3;
  var myH1 = winH/2;
  // console.log(galleryoffsetT-myH);
  $(window).on('scroll', function(){
    var nowTop = $(window).scrollTop();
    // console.log(nowTop);


    if (nowTop >= galleryoffsetT-myH){

      galleryH2.addClass('it');

    }else{
      galleryH2.removeClass('it');}
    // -----------------------------------

    if (nowTop >= galleryBoxoffsetT-myH1){
      galleryBoxO.addClass('it01');
      galleryBoxE.addClass('it02');
    }else{
      galleryBoxO.removeClass('it01');
      galleryBoxE.removeClass('it02');
    }

  });

})(jQuery);








// video 특정영역에서 보여주기

(function($){
  var video = $('#fullVideo');
  var videoTop = video.offset().top;
  var winH = $(window).outerHeight();
  var bt = $('#bannerBox').outerHeight();
  var dt = $('#downloadBox').offset().top;
  var dtBefore = dt - winH;

  $(window).on('scroll', function(){
    var st = $(this).scrollTop();
  //console.log('-st: '+st + '-bt:' + bt + '-dtBefore: ' + dtBefore);
    if(st >= bt && st < dtBefore ){
      video.removeClass('none');
    }else{
      video.addClass('none');
    }
  });

  })(jQuery);







// (function($){

// // Get the video
// var video = document.getElementById("myVideo");

// // Get the button
// var btn = document.getElementById("myBtn");

// // Pause and play the video, and change the button text
// function myFunction() {
//     if (video.paused) {
//         video.play();
//         btn.innerHTML = "Pause";
//     } else {
//         video.pause();
//         btn.innerHTML = "Play";
//     }
// }


//  })(jQuery);


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




// bannerbox text fadein
(function($) {
  var line = $('.copy')
  var text = line.find('p');
  var t1 = text.eq(0);
  var borderBox = line.find('span');


  $(window).on('load',function(e) {
    e.preventDefault();
    // text.fadeOut(5000);
    borderBox.addClass('o')
    line.animate({height:'400px', backgroundColor:'rgba(0,0,0,0.7)',
      border:'5px solid #fff'},"slow",function(){
      text.addClass('show');
    });
  });
  
})(jQuery);




// 브라우저 화면 scroll down


 /*(function($){
   $(window).animate({scrollTop:0},300);
   $('html,body').animate({scrollTop:0},300);
   var box = $('.box');
   var boxList = [];
   var boxLen = box.length;
   var j=0;

   $.each(box, function(index,value){
     boxList[index] = $(this).offset().top;
   });
     console.log(boxList);

     var go = true;
     $('html').on('mousewheel DOMMouseScroll', function(e){
       var originE=e.originalEvent;
       var foxevt= originE.detial;
       var evt = originE.wheelDelta;
       var delta;

 // firefox이벤트 확인
       if(foxevt){
         console.log('firefox detail', foxevt);
         foxevt *= -40;
       }else if(evt){
         console.log('wheelDelta', evt);
         delta = evt;
       }
       console.log(delta);

       var delta = evt;
       if(delta <0 && go){
         go=false;
         (j>= boxLen-1) ? j = boxLen-1 : j+=1;
       }else if(delta>0 && go){
         go=false;
         (j<=0) ? j=0: j-=1;
       }
       $('html').stop().animate({scrollTop:boxList[j]},
         function(){
           go=true;
         });
     });

 })(jQuery);*/
