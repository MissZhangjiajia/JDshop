$(function(){				
	$(".tab a").click(function(e) { 
		e.preventDefault();
	$(".tab a").removeClass("tagstyle")
	$(this).addClass("tagstyle");
		
		
   	});
   	$(".tab a:first").click(function(){
			$(".img1").stop().animate({"left":0},500);
			$(".img2").show().css("right","-20px");
		})
   	$(".img").mouseenter(function(){  		$(".img1").stop().animate({"left":0},500);
		$(".img2").show().css("right","-20px");
   	}).mouseleave(function(){
   		$(".img1").stop().animate({"left":"64px"},500);
   		$(".img2").hide();
   	})
   		$(".tab a:first").click(function(){
			$(".img1").show().stop().animate({"left":0},500);
			$(".img2").show().css("right","-15px");
			$(".login1").hide();
		})
   		$(".tab a:last").click(function(){
   			$(".login1").css("display","block");
   			$(".img1,.img2").hide();
   			$(".login1").css("background","#fff")
   		})
   		
})
