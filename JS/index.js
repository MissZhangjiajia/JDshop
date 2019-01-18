$(function(){
	$("#close").click(function(){
		$("#head_banner").hide()
	})
	$(".second-list li").each(function(){
		$(this).mouseenter(function(){
			index=$(this).index();
			$(".third-list").find(".third-item").eq(index).show();
		}).mouseleave(function(){
			$(".third-list").find(".third-item").hide();
		})
		$(".third-list").mouseenter(function(){
			$(".third-list").find(".third-item").eq(index).show();
		}).mouseleave(function(){
			$(".third-list").find(".third-item").hide();
		})
	})
	var oBanner = document.getElementById("scrollBanner");
			var oList = document.getElementById("scollList");
			var aLi = oList.children;
			var len = aLi.length;
			var perWidth = aLi[0].offsetWidth;
			oList.style.width = len * perWidth + "px";
			
			//角标
			var oNums = document.getElementById("nums");
			var aNums = oNums.children;
			aNums[0].className = "hover";
			
			var i = 0;
			var timer = setInterval(function(){
				move();
			},3000);
			
			var oBtn = document.getElementById("btn");
			var aBtns = oBtn.children;
			var oPrev = aBtns[0];
			var oNext = aBtns[1];
			
			oPrev.onclick = function(){
				i-=2;
				move();
			}
			
			oNext.onclick = function(){
				move();
			}
			
			function move(){
				i++;
				if(i==len){
					oList.style.left = 0;
					i = 1;
				}
				
				if(i==-1){
					oList.style.left = -perWidth * (len-1) + "px";
					i = len-2;
				}
				
				for(var j = 0; j < aNums.length; j++){
					aNums[j].className = "";
				}
				if(i==len-1){
					aNums[0].className = "hover";
				}else{
					aNums[i].className = "hover";
				}
				
				
				startMove(oList,{"left":-perWidth*i});
			}
			
			oBanner.onmouseover = function(){
				clearInterval(timer);
			}
			oBanner.onmouseout = function(){
				timer = setInterval(move,3000);
			}
			
			//鼠标移入角标 切换图片
			
			for(let k = 0; k < aNums.length; k++){
				aNums[k].onmouseover = function(){
					i = k - 1;
					move();
				}
			}
			var count=8640000;
			var timer=setInterval(function(){
				for(var i=0;i<=60;i++){
				count-=1;
				var h=parseInt(count/360000);
			
				
				  if(h<10){
				  	h="0"+h;
				  }
				var m=parseInt(count/6000%60);
				  if(m<10){
				  	m="0"+m;
				  }
				var s=parseInt(count/100%60);
				  if(s<10){
				  	s="0"+s;
				  }				  
			$(".hours").text(h);
			$(".min").text(m);
			$(".sec").text(s);
			if(count==0){
				clearInterval(timer);
			}
			}
		},1000);
		$(".prod").mouseover(function(){
		$(this).children($("dd")).find(".goods").hide();
		$(this).children($(".iconfont")).show().stop().animate({"bottom":0},500);
		}).mouseout(function(){
$(this).find($(".iconfont")).hide().stop().animate({"bottom":"-50"});
		$(this).children($("dd ")).find(".goods").css("display","block");
		})
		
				var flag = true;
				$(window).scroll(function(){
					//显示隐藏
					var scrollTop = $(this).scrollTop();
					if(scrollTop >= 300){
						$("#floorNav").fadeIn();
					}else{
						$("#floorNav").fadeOut();
					}
					
					if(flag){
					
					//让scrollTop和每一个区块比较
					
					$(".main1").find(".xiuxian").each(function(){
						console.log($(this))
						if(scrollTop>= $(this).offset().top - $(this).outerHeight()/2){
							var index = $(this).index();
							$("#floorNav").find("li").eq(index).addClass("hover")
							.siblings().removeClass("hover");
						}
					})
					}
				});
				
				$("#floorNav li:not(:last)").click(function(){
					flag = false;
					var index = $(this).index();
					$(this).addClass("hover").siblings().removeClass("hover");
					$("body,html").stop().animate({"scrollTop":$(".main1 .xiuxian").eq(index).offset().top},500,function(){
						flag = true;
					});
				});
				
				$("#floorNav li:last").click(function(){
					flag = false;
					$("body,html").stop().animate({"scrollTop":0},500,function(){
						flag = true;
						//$("#floorNav").fadeOut();
					});
				})
			
})
