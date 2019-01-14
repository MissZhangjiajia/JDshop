$(function(){
	$("#btn1").click(function(){
		$("#mask").css("display","none");
		$(".maskbg").css("display","none");
	})
	$(".phonelist .btn").click(function(){
		$(".search").css("display","block")
		$(".phonelist .btn i").html("&#9650")
	})
	$(".phonelist .btn").dblclick(function(){
		$(".search").css("display","none")
		$(".phonelist .btn i").html("&#9660")
	})				
	var a=["<ul><li>阿拉伯0086</li><li>阿富汗0086</li><li>阿拉伯0086</li><li>阿拉伯0086</li><li>阿拉伯0086</li></ul>","<ul><li>巴林0086</li><li>不丹0086</li><li>巴基斯坦0086</li><li>巴勒斯坦0086</li></ul>","<ul><li>朝鲜0964</li></ul>","<ul><li>单麦0045</li><li>单麦0076</li><li>单麦0077</li></ul>","<ul><li>俄罗斯0096</li><li>俄罗斯0097</li><li>俄罗斯0098</li></ul>","<ul><li>菲律宾</li><li>菲律宾0086</li><li>菲律宾0080</li><li>菲律宾0087</li></ul>","<ul><li>格陵兰0064</li></ul>","<ul><li>荷兰0066</li><li>荷兰0066</li><li>荷兰0066</li><li>荷兰0066</li></ul>","<ul><li>加拿大0021</li><li>加拿大0021</li><li>加拿大0021</li><li>加拿大0021</li></ul>","<ul><li>卡塔尔0041</li><li>卡塔尔0041</li><li>卡塔尔0041</li><li>卡塔尔0041</li><li>卡塔尔0041</li></ul>","<ul><li>老挝0021</li><li>老挝0021</li><li>老挝0021</li><li>老挝0021</li><li>老挝0021</li><li>老挝0021</li></ul>","<ul><li>美国0001</li><li>美国0001</li><li>美国0001</li></ul>","<ul><li>尼泊尔0977</li><li>尼泊尔0977</li><li>尼泊尔0977</li><li>尼泊尔0977</li><li>尼泊尔0977</li></ul>","<ul><li>葡萄牙0054</li><li>葡萄牙0054</li><li>葡萄牙0054</li><li>葡萄牙0054</li></ul>","<ul><li>日本</li></ul>","<ul><li>沙特阿拉伯0966</li></ul>","<ul><li>泰国0055</li><li>泰国0021</li><li>泰国0044</li></ul>","<ul><li>文莱0673</li><li>文莱0673</li><li>文莱0673</li></ul>","<ul><li>新加坡0097</li><li>新加坡0097</li><li>新加坡0097</li><li>新加坡0097</li></ul>","<ul><li>印度6761</li></ul>","<ul><li>中国0086</li><li>中国台湾 0054</li></ul>"];
	var b=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","Y","Z"]			
	
	$(".search .country").html(a);
	$(".check a").click(function(){
		$(this).css("color","red").siblings().css("color","#000");
		$(".zimu span").html($(this).html())
		var c=$(".zimu span").text();
		
		$.each(b, function(i,value) {
		if(c==value){	
			$(".search .country").empty();
			$(".search .country").append(a[i])					
		}			
	});	
		return false;
	})
$(".sousuo").keyup(function(){
		var c=$(".sousuo").val();		
		$.each(b, function(i,value) {
		if(c.toUpperCase()==value){	
			$(".search .country").empty();
			$(".search .country").append(a[i]);
			$(".zimu span").html(c.toUpperCase())
		}if(c==""){
			$(".search .country").empty();
		}
	})
})	

$(".country").click(function(){	
	$(".search").css("display","none")
})
$(".country ul li").click(function(){
	$(".btn span").html($(this).text())
})
$(".phonelist .text").click(function(){
		$(".tip1").css("display","block")
		if($(this).val()==""){
			 $(".tip1").html("使用手机登录时请在手机号码前加<i>0086</i>")
		}
	})
	///^1(3|5|6|7|8|9)\d{9}$/
	
	$("#rz").click(function(){
		if($('.text').val()=="")
        {
            $('.text').focus();
            $(".tip1").html("请输入手机号").css("color","orange");
            return false;
        }
        //正则表达式
        var reg = /(1[3-9]\d{9}$)/;
        if (!reg.test($('.text').val()))
        {
            $('.text').focus();
            $(".tip1").html("格式错误！").css("color","orange");
            return false;
        }else{
        	location.href="http://localhost:8080/renzheng1.html";
        	
        }
        
				
			
	})
})
