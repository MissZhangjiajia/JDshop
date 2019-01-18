$(function(){
	$.get("http://47.104.244.134:8080/goodsbytid.do",{
		tid:13,
		page:1,
		limit:11
	},function(data){
		var list=data.data;
		var str=""
		for(var i=1;i<list.length;i++){
			str+=`<li>
			<a href="data.html?id=${list[i].id}">
			<img src="${list[i].picurl}"/>		
			<p class="xiangqing">${list[i].name}</p>
			<p>${list[i].info}</p>
			<p>￥   ${list[i].price} <span class="iconfont icon-gouwuche">加入购物车</span></p>
			</a>
			</li>`;
		}
		$("#list").html(str)
	})
})
