//zbrush_gallery.js



// Display the countdown timer in an element
// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2018 12:50:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  /* 1초는 1000, 1분은 60초, 1시간 60분, 1일은 24시간  */
  /* Math.?() 
    Math.random()  0~1, Math.ceil(), Math.round(), Math.floor
  */

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  console.log(seconds);

  // Display the result in the element with id="demo"
  $("#day").children('.num').text(days);
  $("#hour").children('.num').text(hours);
  $("#minute").children('.num').text(minutes);
  $("#second").children('.num').text(seconds);


  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    $('.count').remove();
    $('.shopBtn').before('<p class="expired"></p>');
    $('.expired').css({padding:'1rem', backgroundColor:'#fff', 
                      fontSize:'2rem', marginBottom:'2rem', color:'#111'});
    $('.expired').text('EXPIRED');
    // $("#day").text("EXPIRED");
    // $("#hour").text("EXPIRED");
    // $("#minute").text("EXPIRED");
    // $("#second").text("EXPIRED");
  }
}, 1000);









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



//#userBox에 landing 으로 보여주기

(function($){
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

  var userLi3=userUl.children('li:eq(2)');
  var userLi3off = userLi3.offset().top;

  var userPic1= userLi1.children('div');
  var userPic2= userLi2.children('div');
  var userPic3= userLi3.children('div');
  var userBox1= userLi1.find('dl');
  var userBox2= userLi2.find('dl');
  var userBox3= userLi3.find('dl');

  var H = winH/2;
  var H1 = winH/4*3;
  // console.log(userH2off-H);


  $(window).on('scroll',function(){
    var nowTop = $(window).scrollTop();
    // console.log(nowTop);

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

    if (nowTop >= userLi3off-H1){
      userPic3.addClass('userPic3Show');
    } else{
      userPic3.removeClass('userPic3Show');
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

    if (nowTop >=userLi3off-H1){
      userBox3.addClass('userBox3Show');
    } else{
      userBox3.removeClass('userBox3Show');
    }
  });
})(jQuery);


// 배너에 투명창 랜딩
(function($){
  var bBox = $('.bBox');
  var bBoxA = bBox.find('span');

    bBox.on('mouseenter', function(e){
      bBoxA.addClass('bShow');
    });

    bBox.on('mouseleave', function(e){
      bBoxA.removeClass('bShow');
    });
})(jQuery);



// 배너 영역 모달창
(function($) {
  var bBox = $('.bBox');
  var bLink = bBox.children('a');
  var list = $('.list');
  var listImg = list.find('li');

 var addr = '../img/';
 var myImg = [
      {thum:'slide_01_B.jpg', img:'slide_01.jpg', href:'#',  narr:'ALL ABOUT 3D IS WITH ZBRUSH'},
      {thum:'slide_02_B.jpg', img:'slide_02.jpg', href:'#',  narr:'SCULPING MAKES YOUR LIFE MORE FUN'},
      {thum:'slide_03_B.jpg', img:'slide_03.jpg', href:'#',    narr:'BECOME A PRO IN ZBRUSH'},
      {thum:'slide_04_B.jpg', img:'slide_04.jpg', href:'#',    narr:'THE EASIEST WAY TO GET YOUR ARTWORKS FABULOUS'},
      {thum:'slide_05_B.jpg', img:'slide_05.jpg', href:'#',    narr:'STUNNING YOUR 3D ARTWORK'},
      {thum:'slide_06_B.jpg', img:'slide_06.jpg', href:'#',    narr:'ALLLLLLLLLLLLLLLLL'},
  ];

  var ImgSet = function(i){
    bBox.css({backgroundImage:'url('+ addr + myImg[i].img +')',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'0 40%'});
    bLink.attr({href:'http://' + myImg[i].href, 
                  target:'_blank',
                  title:myImg[i].narr});
    bLink.text(myImg[i].narr);
  };


  for(var j = 0; j < myImg.length; j+=1){
    listImg.eq(j).children('a').css({backgroundImage:'url(' + addr + myImg[j].thum+ ')',
                                     backgroundRepeat:'no-repeat', 
                                     backgroundSize:'cover',
                                     backgroundPosition:'center',
                                     transition:'all 400ms'});
  } 

  listImg.on('click mouseenter focus',  function(){
    $(this).addClass('orange');
    console.log(this);
  });
  listImg.on('click mouseleave blur',  function(){
    $(this).removeClass('orange');
  });
 

  ImgSet(0);

  listImg.on('click',function(e) {
    e.preventDefault();
    var i = $(this).index();
    ImgSet(i);
  });


})(jQuery);
