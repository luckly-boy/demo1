var oCart = document.getElementById("cart");
var oHelp = document.getElementById("help");
var oNav = document.getElementById("nav");
var oMore = document.getElementById("cart-more");
var oMore2 = document.getElementById("help-more");
var oMore3 = document.getElementById("nav-more");
var oPoint = document.getElementById("point").getElementsByTagName("li");
var oBox = document.getElementById("box")
var num = oBox.getElementsByTagName("li")[0].offsetWidth;
var oBanner = document.getElementById("banner");
var oCartI = oCart.getElementsByTagName("i")[0];
var oHelpI = oHelp.getElementsByTagName("i")[0];
var oNavI = oNav.getElementsByTagName("i")[0];
var oBack = document.getElementById("back");
var oItem = document.getElementById("item");
var oItemUl = oItem.getElementsByTagName("ul");
var oHead = document.getElementById("head").getElementsByTagName("div");
var m=0;
var n=0;
var time1 = null;
var time2 = null;
var time3 = null;
var time4 = null;

for(var i = 0;i<oHead.length;i++){
	oHead[i].index = i;
	oHead[i].onmouseover = function(){
		for(var j = 0;j<oHead.length;j++){
			oHead[j].className="";
			oItemUl[j].style.display = "none";
			
		}
		this.className = "active";
		oItemUl[this.index].style.display = "block";
	}
}





oCart.onclick = function(){
	oMore.style.display = "block";
	oMore2.style.display = "none";
	oMore3.style.display = "none";
	oCartI.style.backgroundPosition = "-174px -21px"
	oHelpI.style.backgroundPosition = "-174px -15px"
	oNavI.style.backgroundPosition = "-174px -15px"
}//购物车显示
oCart.onmouseover = function(){
	document.onclick = null;
}//移入购物车清除document点击事件
oCart.onmouseleave = function(){
	document.onclick = function(){
		oMore.style.display = "none";
		oCartI.style.backgroundPosition = "-174px -15px"
		return false;
	}
}//离开购物车时document点击事件才生效



oHelp.onclick = function(){
	oMore2.style.display = "block";
	oMore.style.display = "none";
	oMore3.style.display = "none";
	oHelpI.style.backgroundPosition = "-174px -21px"
	oCartI.style.backgroundPosition = "-174px -15px"
	oNavI.style.backgroundPosition = "-174px -15px"
}//购物车显示
oHelp.onmouseover = function(){
	document.onclick = null;
}//移入购物车清除document点击事件
oHelp.onmouseleave = function(){
	document.onclick = function(){
		oMore2.style.display = "none";
		oHelpI.style.backgroundPosition = "-174px -15px"
		return false;
	}
}//离开购物车时document点击事件才生效


oNav.onclick = function(){
	oMore3.style.display = "block";
	oMore.style.display = "none";
	oMore2.style.display = "none";
	oNavI.style.backgroundPosition = "-174px -21px"
	oCartI.style.backgroundPosition = "-174px -15px"
	oHelpI.style.backgroundPosition = "-174px -15px"
}//购物车显示
oNav.onmouseover = function(){
	document.onclick = null;
}//移入购物车清除document点击事件
oNav.onmouseleave = function(){
	document.onclick = function(){
		oMore3.style.display = "none";
		oNavI.style.backgroundPosition = "-174px -15px"
		return false;
	}
}//离开购物车时document点击事件才生效





for(var i=0; i<oPoint.length;i++){
	oPoint[i].index= i;
	oPoint[i].onmouseover = function(){
		for(var j=0;j<oPoint.length;j++){
			oPoint[j].className = "";
		}
		this.className = "active";
		if(this.index!=n){//相同点滑动不执行
			if(this.index>n){//本次轮播点和当前轮播点的大小
				if(this.index==3&&n==0){//最后点无缝拉倒
					right();
				}else{//差几个下标就执行几次（防止上个定时器未执行完拉到一半被清空 静止的情况）
					for(var i=0;i<this.index-n;i++){
						left();
					}	
				}
			}else if(this.index<n){//本次轮播点和当前轮播点的大小
				if(this.index==0&&n==3){//最前点无缝拉动
					m=3;
					left();
				}else{//差几个下标就执行几次（防止上个定时器未执行完拉到一半被清空 静止的情况）
					for(var i=0;i<n-this.index;i++){
						right();
					}
				}
			}	
		}else{
			
		}
	}
}//轮播点移入事件
function left(){
		clearInterval(time2);
		++m;
		if(m==5){
			m=1;
			oBox.style.left = "0px";
		}
		time2 = setInterval(function(){
			if(oBox.offsetLeft<=-(num*m)){
				clearInterval(time2);//超出这张范围清空定时器
			}else{
				for(var j=0;j<oPoint.length;j++){
					oPoint[j].className = "";
				}
				if(m==4){
					oPoint[0].className = "active";
					n=0;//记录这次的节点下标
				}else{
					oPoint[m].className = "active";
					n=m;//记录这次的节点下标
				}
				oBox.style.left = oBox.offsetLeft - 20 +"px";
			}
		},3)
}//左滑函数
function right(){
		clearInterval(time4);
		--m;
		if(m==-1){
			m=3;
			oBox.style.left = -(num*4)+"px";
		}
		time4 = setInterval(function(){
			if(oBox.offsetLeft>=-num*(m)){
				clearInterval(time4);//超出这张范围清空定时器
			}else{
				for(var j=0;j<oPoint.length;j++){
					oPoint[j].className = "";
				}
				if(m==-1){
					oPoint[3].className = "active";
					n=3;//记录这次的节点下标
				}else{
					oPoint[m].className = "active";
					n=m;//记录这次的节点下标
				}
				oBox.style.left = oBox.offsetLeft + 20 +"px";
			}
		},3)
}//右滑函数


time1 = setInterval(left,3000);

oBanner.onmouseover = function(){
	clearInterval(time1);
}
oBanner.onmouseleave = function(){
	time1 = setInterval(left,3000);
}
//定时器轮播

oBack.onclick = function(){
	var speed = 2;
	time3 = setInterval(function(){
		speed +=0.04 ;
		var scoll = document.body.scrollTop||document.documentElement.scrollTop;
		if(scoll<=0){
			clearInterval(time3);
			speed = 2;
		}else{
			document.body.scrollTop -= (50/speed);
			document.documentElement.scrollTop -= Math.floor(50/speed);	
		}
	},1)
	
}//返回顶部事件
document.onmousewheel = function(){
		clearInterval(time3);
	}

window.onscroll = function(){
	var scoll = document.body.scrollTop||document.documentElement.scrollTop;
	if(scoll>=400){
		oBack.style.display = "block";
	}else{
		oBack.style.display = "none";
	}
}











