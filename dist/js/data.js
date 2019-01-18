$(function(){
		var id = location.search.split("=")[1];
$.get("http://47.104.244.134:8080/goodsbyid.do",{id:id},function(data){
		str = `		
		<div id="zoomArea">
			<div id="midArea">
				<img src="${data.picurl}"/>
				<div id="zoom"></div>
			</div>
			<div id="bigArea">
				<img src="${data.picurl}"/>
			</div>	
			<div id="smallArea">
				<img src="${data.picurl}"/>
				<img src="${data.picurl}"/>
				<img src="${data.picurl}"/>
				<img src="${data.picurl}"/>
				<img src="${data.picurl}"/>
			</div>
		</div>
		<div class="right">
			<p>${data.name}</p>
			<p>￥    ${data.price}</p>
			<span class="iconfont icon-gouwuche"></span>
			<input type="button" class="addBtn"     value="加入购物车"/>
		</div>`;
		
		$("#data").html(str);
		
		$(".addBtn").click(function(){
			
			var token = $.cookie("token");
			console.log(token)
$.get("http://47.104.244.134:8080/cartsave.do",{
				gid:id,
				token:token
			},function(data){
				if(data.code==0){
					location.href = "cart.html";
				}
			})
		})
		
				//显示隐藏
	
	$("#midArea").mouseenter(function(){
		 		$("#zoom").css("display","block") ;
		$("#bigArea").css("display","block") ;
	})
	
	$("#midArea").mouseleave ( function(){
		$("#zoom").css("display","none") ;
		$("#bigArea").css("display","none") ;
	})
	
	//控制放大镜的位置
	
	$("#midArea").mousemove ( function(e){
		
		var _left = e.pageX -  $("#zoomArea").position().left - $("#zoom").outerWidth()/2;
		var _top = e.pageY - $("#zoomArea").position().top - $("#zoom").outerHeight()/2;
	//	console.log(_top) 
		
		if(_left <= 0){
			_left = 0;
		}
		if(_left>= $("#midArea").outerWidth() - $("#zoom").outerWidth() ){
			_left = $("#midArea").outerWidth() -$("#zoom").outerWidth() ;
		}
		if(_top <= 0){
			_top = 0;
		}
			
		if(_top>= $("#midArea").outerHeight() - $("#zoom").outerHeight()){
		
			_top = $("#midArea").outerHeight() - $("#zoom").outerHeight();
		}
		
		$("#zoom").css("left",_left + "px")
		$("#zoom").css("top", _top + "px") 
		
		//控制大图位置
		var b=-_left/$("#midArea").outerWidth()*$("#bigArea").find("img").outerWidth()+ "px";
		var c=-_top/$("#midArea").outerHeight()*$("#bigArea").find("img").outerHeight() + "px";
		$("#bigArea").find("img").css("left",b) 
		$("#bigArea").find("img").css("top",c) 
		
	})
	
	
	for(var i = 0; i < $("#smallArea img").length; i++){
		$("#smallArea img")[i].click ( function(){
			$("#midArea img").src = $(this).src;
			$("#bigArea img").src = $(this).src;
		})
	}
		
	})
	
})