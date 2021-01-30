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
//1
	$('.button').click(function() {
		blurtree();
		//location.href = '#down';
		$('.boxfoor').css('filter','blur(5px)');	
		$(".boxvideo").fadeIn();
		$(".close1").fadeIn();
		$(".boxvideo3").css('display','none');
		document.getElementById("stopone").play();
		//$(".plyr__controls").css("visibility","visible");
		//player.autoplay;
		//$('body').addClass('stop-scrolling')  //stop scrol
		//$('body').bind('touchmove', function(e){e.preventDefault()})  //stop scrol mobile
	});
	$('.close1').click(function() {
		stopVideo();
		//location.href = '#down';
		$(".boxvideo").fadeOut();
		$(".close1").fadeOut();
		$('.boxfoor,.boxthree').css('filter','blur(0px)');
		//$('.boxthree').css('filter','blur(0px)');
		//$('body').removeClass('stop-scrolling');	//start scrol
		//$('body').unbind('touchmove') 		//start scrol mobile		
	})
//2
	$('.button2').click(function() {
		blurtree();
		//location.href = '#down';
		$('.boxfoor').css('filter','blur(5px)');			
		$(".boxvideo2").fadeIn();
		$('.close2').fadeIn();
		document.getElementById('stoptwo').play();
		//$('body').addClass('stop-scrolling')  //stop scrol
		//$('body').bind('touchmove', function(e){e.preventDefault()})  //stop scrol mobile		
	});
	$('.close2').click(function() {
		stopVideo2();
		//location.href = '#down';
		$(".boxvideo2").fadeOut();
		$(".close2").fadeOut();
		$('.boxfoor,.boxthree').css('filter','blur(0px)');
		//$('body').removeClass('stop-scrolling');	//start scrol
		//$('body').unbind('touchmove') 		//start scrol mobile		
	})
//3
	$('.button3').click(function() {
		blurtree();
		$('.boxfoor').css('filter','blur(5px)');		
		$(".boxvideo3").fadeIn();
		$('.close3').fadeIn();
		document.getElementById('stopthree').play();
		//$('body').addClass('stop-scrolling')  //stop scrol
		//$('body').bind('touchmove', function(e){e.preventDefault()})  //stop scrol mobile
		//document.location.href = '#down';		
	});
	$('.close3').click(function() {
		stopVideo3();
		$(".boxvideo3").fadeOut();
		$(".close3").fadeOut();
		$('.boxfoor,.boxthree').css('filter','blur(0px)');
		//$('body').removeClass('stop-scrolling');	//start scrol
		//$('body').unbind('touchmove') 		//start scrol mobile			
	})
//4
	$('.button4').click(function() {
		blurtree();
		$('.boxfoor').css('filter','blur(5px)');		
		$(".boxvideo4").fadeIn();
		$('.close4').fadeIn();
		document.getElementById('stopfor').play();
		//$('body').addClass('stop-scrolling')  //stop scrol
		//$('body').bind('touchmove', function(e){e.preventDefault()})  //stop scrol mobile
		//document.location.href = '#down';		
	});
	$('.close4').click(function() {
		stopVideo4();
		$(".boxvideo4").fadeOut();
		$(".close4").fadeOut();
		$('.boxfoor,.boxthree').css('filter','blur(0px)');
		
		//$('body').removeClass('stop-scrolling');	//start scrol
		//$('body').unbind('touchmove') 		//start scrol mobile
	})