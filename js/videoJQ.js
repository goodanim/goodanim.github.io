	//По наведению мыши
/*
$('.button').mouseover(function() {
		$('.button').css('opacity','100%');
	})
$('.button').mouseout(function() {
		$('.button').css('opacity','50%');
	})
*/

function blurtree(){
	iwphone = window.innerWidth;
	if (iwphone<1000) {$('.boxthree').css('filter','blur(5px)');}
}

$(".plyr__video-wrapper").click(function(){
	$(".plyr__controls").css("visibility","visible");
})
		var video = document.getElementById("stopone");
    		 function stopVideo(){video.pause();}
    	var video2 = document.getElementById("stoptwo");
    		 function stopVideo2(){video2.pause();}
    	var video3 = document.getElementById("stopthree");
    		 function stopVideo3(){video3.pause();}
    	var video4 = document.getElementById("stopfor");
    		 function stopVideo4(){video4.pause();}
    	var video5 = document.getElementById("stopfive");
    		 function stopVideo5(){video5.pause();}	 	 	 	 
//1
	$('.button,.classic').click(function() {
		blurtree();
		//location.href = '#down';
		$('.box,#boxtwo,.boxthree,.boxfoor').css('filter','blur(5px)');
		//$('.box,#boxtwo,.boxthree,.boxfoor').css('filter','britnes(10)');
		$(".boxvideo").fadeIn();
		$(".close1").fadeIn();
		$(".boxvideo3").css('display','none');
		document.getElementById("stopone").play();

		//scroll
		$('html,body').animate({
			scrollTop: $ ('.boxthree').offset ().top - 0
		},500);
		//$(".plyr__controls").css("visibility","visible");
		//player.autoplay;
		$('body').addClass('stop-scrolling')  //stop scrol
		//$('body').bind('touchmove', function(e){e.preventDefault()})  //stop scrol mobile
	});
	$('.close1').click(function() {
		stopVideo();
		//location.href = '#down';
		$(".boxvideo").fadeOut();
		$(".close1").fadeOut();
		$('.box,#boxtwo,.boxthree,.boxfoor').css('filter','blur(0px)');
		//$('.boxthree').css('filter','blur(0px)');
		//$('body').removeClass('stop-scrolling');	//start scrol
		//$('body').unbind('touchmove') 		//start scrol mobile		
	})
//2
	$('.button2,.doodle').click(function() {
		blurtree();
		//location.href = '#down';
		$('.box,#boxtwo,.boxthree,.boxfoor').css('filter','blur(5px)');			
		$(".boxvideo2").fadeIn();
		$('.close2').fadeIn();
		document.getElementById('stoptwo').play();

		//scroll
		$('html,body').animate({
			scrollTop: $ ('.boxthree').offset ().top - 0
		},500)
		//$('body').addClass('stop-scrolling')  //stop scrol
		//$('body').bind('touchmove', function(e){e.preventDefault()})  //stop scrol mobile		
	});
	$('.close2').click(function() {
		stopVideo2();
		//location.href = '#down';
		$(".boxvideo2").fadeOut();
		$(".close2").fadeOut();
		$('.box,#boxtwo,.boxthree,.boxfoor').css('filter','blur(0px)');
		//$('body').removeClass('stop-scrolling');	//start scrol
		//$('body').unbind('touchmove') 		//start scrol mobile		
	})
//3
$('.button3,.Isometria').click(function() {
		blurtree();
		$('.box,#boxtwo,.boxthree,.boxfoor').css('filter','blur(5px)');		
		$(".boxvideo3").fadeIn();
		$('.close3').fadeIn();
		document.getElementById('stopthree').play();

		//scroll
		$('html,body').animate({
			scrollTop: $ ('.boxthree').offset ().top - 0
		},500)
		//$('body').addClass('stop-scrolling')  //stop scrol
		//$('body').bind('touchmove', function(e){e.preventDefault()})  //stop scrol mobile
		//document.location.href = '#down';		
	});
	$('.close3').click(function() {
		stopVideo3();
		$(".boxvideo3").fadeOut();
		$(".close3").fadeOut();
		$('.box,#boxtwo,.boxthree,.boxfoor').css('filter','blur(0px)');
		
		//$('body').removeClass('stop-scrolling');	//start scrol
		//$('body').unbind('touchmove') 		//start scrol mobile
	})
	$('.button4,.premium').click(function() {
		blurtree();
		$('.box,#boxtwo,.boxthree,.boxfoor').css('filter','blur(5px)');		
		$(".boxvideo4").fadeIn();
		$('.close4').fadeIn();
		document.getElementById('stopfor').play();

		//scroll
		$('html,body').animate({
			scrollTop: $ ('.boxthree').offset ().top - 0
		},500)
		//$('body').addClass('stop-scrolling')  //stop scrol
		//$('body').bind('touchmove', function(e){e.preventDefault()})  //stop scrol mobile
		//document.location.href = '#down';		
	});
	$('.close4').click(function() {
		stopVideo4();
		$(".boxvideo4").fadeOut();
		$(".close4").fadeOut();
		$('.box,#boxtwo,.boxthree,.boxfoor').css('filter','blur(0px)');
		//$('body').removeClass('stop-scrolling');	//start scrol
		//$('body').unbind('touchmove') 		//start scrol mobile			
	})
//4
	$('.button5,.shape').click(function() {
		blurtree();
		$('.box,#boxtwo,.boxthree,.boxfoor').css('filter','blur(5px)');		
		$(".boxvideo5").fadeIn();
		$('.close5').fadeIn();
		document.getElementById('stopfive').play();

		//scroll
		$('html,body').animate({
			scrollTop: $ ('.boxthree').offset ().top - 0
		},500)
		//$('body').addClass('stop-scrolling')  //stop scrol
		//$('body').bind('touchmove', function(e){e.preventDefault()})  //stop scrol mobile
		//document.location.href = '#down';		
	});
	$('.close5').click(function() {
		stopVideo5();
		$(".boxvideo5").fadeOut();
		$(".close5").fadeOut();
		$('.box,#boxtwo,.boxthree,.boxfoor').css('filter','blur(0px)');
		
		//$('body').removeClass('stop-scrolling');	//start scrol
		//$('body').unbind('touchmove') 		//start scrol mobile
	})







