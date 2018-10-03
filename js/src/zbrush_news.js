// zbrush_new.js

(function($){
	var bannerWrap = $('.banner_wrap');
	var banner = bannerWrap.children('div');
	var divWidth = banner.outerWidth(true);
	var l = divWidth;

	bannerWrap.css({marginLeft:-divWidth});
	banner.eq(-1).prependTo(bannerWrap);
	banner = bannerWrap.children('div');
	banner.eq(2).addClass('active');

	var nbtn = $('.nbtn');
	nbtn.on('click',function(e){
		e.preventDefault();
		banner.eq(2).removeClass('active');
		bannerWrap.animate({marginLeft:-(l+divWidth)}, function(){
			banner.eq(0).appendTo(bannerWrap);
			bannerWrap.css({marginLeft:-divWidth})
			banner = bannerWrap.children('div');
			banner.eq(2).addClass('active');
		});
	});

	var pbtn = $('.pbtn');
	pbtn.on('click', function(e){
		e.preventDefault();
		banner.eq(2).removeClass('active');
		bannerWrap.animate({marginLeft:0}, function(){
			banner.eq(-1).prependTo(bannerWrap);
			bannerWrap.css({marginLeft:-divWidth});
			banner = bannerWrap.children('div');
			banner.eq(2).addClass('active');;
		});
	});


	banner.on('click', function(e){
		e.preventDefault();

		var i = $(this).index();
		var j = (i-1)*l;
		banner.eq(2).removeClass('active');

		// 선택한 배너 기준
		// 1. 
		bannerWrap.animate({marginLeft:-j}, function(){
			if (i<2) {banner.eq(-1).prependTo(bannerWrap);}
			else if(i>2){banner.eq(0).appendTo(bannerWrap); }
			bannerWrap.css({marginLeft:-divWidth});
			banner = bannerWrap.children('div');
			banner.eq(2).addClass('active');
		});
	});

})(jQuery);