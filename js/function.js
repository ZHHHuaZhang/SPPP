function a(obj){
	var Tempobj = document.getElementById(obj);
	return Tempobj;
}
function b(obj)
{	var Tempobj = document.getElementsByName(obj);
	return Tempobj;
}
function c(obj)
{    var Tempobj = document.getElementsByTagName(obj);
	return Tempobj;
}
function ab(obj1,obj2)
{var Tempobj = document.getElementById(obj1).getElementsByName(obj2);
return Tempobj;
}
function ac(obj1,obj2)
{var Tempobj = document.getElementById(obj1).getElementsByTagName(obj2);
return Tempobj;
}
function bc(obj1,obj2)
{var Tempobj = document.getElementsByName(obj1).getElementsByTagName(obj2);
return Tempobj;
}
function v(objOGV,objMP4,funObj,thx,thy)
{
	if(thx==undefined||thx=="undefined"||thx==""||thx==NaN||thx=="NaN"||thx=="Null"||thx==null){thx=1256;}
	if(thy==undefined||thy=="undefined"||thy==""||thy==NaN||thy=="NaN"||thy=="Null"||thy==null){thy=647;}
	return "<video width='"+thx+"' height='"+thy+"' controls='controls' autoplay='autoplay' onended = '"+funObj+"' id='videoMP4' autobuffer='true'><source src='"+objOGV+"' type='web/ogg'><source src='"+objMP4+"' type='web/mp4'>Your browser does not support the video tag.</video>"
	
}
function v2(objOGV,objMP4,funObj,thx,thy)
{
	if(thx==undefined||thx=="undefined"||thx==""||thx==NaN||thx=="NaN"||thx=="Null"||thx==null){thx=1256;}
	if(thy==undefined||thy=="undefined"||thy==""||thy==NaN||thy=="NaN"||thy=="Null"||thy==null){thy=647;}
	return "<video width='"+thx+"' height='"+thy+"' controls='controls' onended = '"+funObj+"' id='videoMP4' autobuffer='true'><source src='"+objOGV+"' type='web/ogg'><source src='"+objMP4+"' type='web/mp4'>Your browser does not support the video tag.</video>"
	
}
function acafc(obj1,obj2,Num){//获得目录中的某个对象
	var TempObj = document.getElementById(obj1).getElementsByTagName(obj2)[Num];
	return TempObj;
}
function acnfc(obj1,obj2,Num,objF,objC){
	var TempObj = document.getElementById(obj1).getElementsByTagName(obj2)[Num];
	myswitch(TempObj,objF,objC);
}
function acnfc2(obj1,obj2,Num,objF,objC){
	var TempObj = document.getElementById(obj1).getElementsByTagName(obj2)[Num];
	return myswitch2(TempObj,objF,objC);
}
function afc(obj,objF,objC){
	var TempObj = document.getElementById(obj);
	myswitch(TempObj,objF,objC);
}
function afc2(obj,objF,objC){
	var TempObj = document.getElementById(obj);
	return myswitch2(TempObj,objF,objC);
}
function bfc(obj,objF,objC){
	var TempObj = document.getElementsByName(obj);
	myswitch(TempObj,objF,objC);
}
function cfc(obj,Num,objF,objC){
	var TempObj = document.getElementsByTagName(obj)[Num];
	myswitch(TempObj,objF,objC);
}
function myswitch(TempObj,objF,objC){
	switch(objF){
		case "d":
		TempObj.style.display = objC;break;
		case "o":
	    TempObj.style.opacity = objC;break;
		case "w":
		TempObj.style.width = objC+"px";break;
		case "h":
		TempObj.style.height = objC+"px";break;
		case "l":
		TempObj.style.left = objC+"px";break;
		case "t":
		TempObj.style.top = objC+"px";break;
		case "i":
		TempObj.innerHTML = objC;break;
		case "s":
		TempObj.src = objC;break;
	}
}
function myswitch2(TempObj,objF,objC){
	switch(objF){
		case "d":
		  if(TempObj.style.display == objC){return true; }
		case "o":
	    if(TempObj.style.opacity == objC){return true; }
		case "w":
		if(TempObj.style.width == objC+"px"){return true; }
		case "h":
		if(TempObj.style.height == objC+"px"){return true; }
		case "l":
		if(TempObj.style.left == objC+"px"){return true; }
		case "t":
		if(TempObj.style.top == objC+"px"){return true; }
		case "s":
		if(TempObj.src.slice(-9) == objC.slice(-9)){return true; }
	}
	return false;
}

var MingCorseSound=new Audio();
function bgSound(objMP3,funObj)
{
if(objMP3){MingCorseSound.src=objMP3;}else{MingCorseSound.src="";}
if(MingCorseSound.currentTime>0){MingCorseSound.currentTime=0;};
MingCorseSound.play();
MingCorseSound.loop = "loop";
//if(funObj){MingCorseSound.addEventListener("ended",function(){funObj})}
//tmpSound.addEventListener("play", sound.playFun);
//tmpSound.addEventListener("timeupdate", sound.timeupdateFun);
}
bgSoundOpenState=0;
function bgSoundOpen(){
	if(bgSoundOpenState==0){
		bgSoundOpenState=1;
		MingCorseSound.play()
		//acnfc("bgSound","img",0,"d","block");
	}else{
		bgSoundOpenState=0;
		MingCorseSound.pause()
		//acnfc("bgSound","img",0,"d","none");
	}
	
}
//=========================================框架使用程序====================================
function setMyCompleted(obj){window.parent.postMessage("setCompleted#"+obj,"*");
}
function totalLoPage(num){window.parent.postMessage("totalPage#"+num,"*");
}
function nowLoPage(num){window.parent.postMessage("nowPage#"+num,"*");
}

//===========================================视频使用程序==================================
function VideoShow(ObjV,objFun){
afc("myVideo","i",v("video/"+ObjV+".ogv","video/"+ObjV+".mp4",objFun,"",""));
afc("myVideo","d","block");
a("videoMP4").play();
}
function VideoHide(){
afc("myVideo","d","none");
afc("myVideo","i","");
}
//==================================================================================================
/*
function initPage()
{
	document.addEventListener('touchstart',function(ev){ev.preventDefault();},false);
	document.addEventListener('touchend',function(ev){ev.preventDefault();},false);
	
	addTouchEvent("PN","PN");
	bgSoundOpen();
	s("bgSound").addEventListener('touchstart',function()
	{    bgSoundOpen();
	},false);
	s("p3_btn").addEventListener('touchstart',function()
	{
		acnfc("P3","img",2,"d","block");
	},false);
	s("p4_btn").addEventListener('touchstart',function()
	{
		acnfc("P4","img",2,"d","block");
	},false);
	s("p5_btn").addEventListener('touchstart',function()
	{
		acnfc("P5","img",2,"d","block");
	},false);
	s("p6_btn").addEventListener('touchstart',function()
	{
		acnfc("P6","img",2,"d","block");
	},false);
	
	
	s("p10_btn").addEventListener('touchstart',function()
	{
		acnfc("P10","img",2,"d","block");
	},false);
	s("p11_btn").addEventListener('touchstart',function()
	{
		acnfc("P11","img",2,"d","block");
	},false);
	s("p12_btn").addEventListener('touchstart',function()
	{
		acnfc("P12","img",2,"d","block");
	},false);
	s("p14_btn").addEventListener('touchstart',function()
	{
		p14_img_init()
		acnfc("P14","img",0,"d","block");
	},false);
	s("p15_btn").addEventListener('touchstart',function()
	{
		p14_img_init()
		acnfc("P14","img",1,"d","block");
	},false);
	s("p16_btn").addEventListener('touchstart',function()
	{
		p14_img_init()
		acnfc("P14","img",2,"d","block");
	},false);
	function p14_img_init(){
				acnfc("P14","img",0,"d","none");
				acnfc("P14","img",1,"d","none");
				acnfc("P14","img",2,"d","none");
	}
}

function PN()
{
	switch(touch_rot)
	{
		case 1:
			if(s("PN").style.top=="-1200%"||s("PN").style.top=="-1300%"){
			     afc("XB","d","none");
			}else{
				afc("XB","d","block");
			}
		    nextpage("PN",-100,1300,"Y");
			break;
		case 2:
			if(s("PN").style.top=="-1300%"){
			     afc("XB","d","none");
			}else{
				afc("XB","d","block");
			}
		    nextpage("PN",100,1300,"Y");
			break;
		case 3:
			break;
		case 4:
			break;
		default:
			break;
	}
}
*/
//==================================================================================================================
//定义声音
var oAudio=new Audio();

//滑屏相关变量
var touch_rot=0;//滑屏幕方向
var theoneY=false;
var theotherY=false;
var theoneX=false;
var theotherX=false;


function playvideo(url,fct)
{
	s("video").innerHTML="<video id='videoMP4' style='width:1256px; height:647px;' autoplay"+" onEnded="+"'"+fct+"'"+" controls><source src="+url+".ogv type='video/ogg'><source src="+url+".mp4 type='video/mp4'></video>";
}

function playsound(url)
{
	oAudio.src=url;
	oAudio.play();
}

function playsoundand(url,fct)
{
	oAudio.src=url;
	oAudio.play();
	oAudio.onended=window[fct]();
}



function touchstartEvent(id,fct)
{
	s(id).addEventListener('touchstart',window[fct],false);
}


function addTouchEvent(id,fct)
{
	s(id).addEventListener('touchstart',touchstart,false);
	s(id).addEventListener('touchend',touchend,false);
	s(id).addEventListener('touchend',window[fct],false);
}
function touchstart(ev)
{
	//alert("touchstart");
	ev.preventDefault();  //阻止出现滚动条
	theoneX=ev.touches[0].clientX;
	theoneY=ev.touches[0].clientY;
	touch_rot=0;
}
function touchend(ev)
{
	ev.preventDefault();  //阻止出现滚动条
	theotherX=ev.changedTouches[0].clientX;
	theotherY=ev.changedTouches[0].clientY;
	if(Math.abs(theotherY-theoneY)>Math.abs(theotherX-theoneX))
	{
		if(theotherY-theoneY>20)
		{
			//nextpage("P2r",100,900,"Y");
			touch_rot=2;
		}else if(theotherY-theoneY<-20)
		{
			//nextpage("P2r",-100,900,"Y");
			touch_rot=1;
		}
	}else
	{
		if(theotherX-theoneX>20)
		{
			//nextpage("P2r",100,900,"Y");
			touch_rot=4;
		}else if(theotherX-theoneX<-20)
		{
			//nextpage("P2r",-100,900,"Y");
			touch_rot=3;
		}
	}
}
function nextpage(id,n,p,r)
{
	switch(r)
	{
		case "X":
			if(n<=-5&&parseInt(s(id).style.left)>-p)
			{
				setTimeout(function(){nextpage(id,n+5,p,"X")},20);
				s(id).style.left=parseInt(s(id).style.left)-5+"%";
			}
			else if(n>=5&&parseInt(s(id).style.left)<-0)
			{
				setTimeout(function(){nextpage(id,n-5,p,"X")},20);
				s(id).style.left=parseInt(s(id).style.left)+5+"%";
			};
			break;
		case "Y":
			if(n<=-5&&parseInt(s(id).style.top)>-p)
			{
				setTimeout(function(){nextpage(id,n+5,p,"Y")},20);
				s(id).style.top=parseInt(s(id).style.top)-5+"%";
			}
			else if(n>=5&&parseInt(s(id).style.top)<-0)
			{
				setTimeout(function(){nextpage(id,n-5,p,"Y")},20);
				s(id).style.top=parseInt(s(id).style.top)+5+"%";
			};
			break;
		default:
			break;		
	}
}
//等比例拉伸适应屏幕
function matchWH(w,h)
{
	//alert(document.documentElement.clientWidth+"||"+document.documentElement.clientHeight);
	var bw=document.documentElement.clientWidth;
	var bh=document.documentElement.clientHeight;
	if(bw*h>bh*w)
	{
		//alert("pk");
		//浏览器宽度太宽，高度100%显示
		s("window").style.height=bh+"px";
		s("window").style.width=bh*w/h+"px";
		s("window").style.left=(bw*h-bh*w)/(2*h)+"px";
		//alert(bh+"px");
	}else
	{
		//alert("pg");
		//浏览器高度太高，宽度100%显示
		s("window").style.width=bw+"px";
		s("window").style.height=bw*h/w+"px";
		s("window").style.top=(bh*w-bw*h)/(2*w)+"px";
	}
}

function torad(dig)
{
	return dig*Math.PI/180
}
function s(id)
{
	return document.getElementById(id);
}
function imgLoad(url)
{    
  var img = new Image();    
  img.src = url;    
  if (img.complete)
  {    
		
  }  
};
function show(elem)
{
	s(elem).style.display="block";
}

function hide(elem)
{
	s(elem).style.display="none";
}

function changeimg(i,src)
{
	s(i).src=src;
}
//百分比放大
//目标DIV 目标图片 初始值0~100 结束值 速度
function movePercent(idd,idg,Percent1,Percent2,speed)
{
	if(parseInt(Percent1)<parseInt(Percent2))
	{
		s(idd).style.top=parseInt((100-Percent1-1)/2)+"%";
		s(idd).style.left=parseInt((100-Percent1-1)/2)+"%";
		
		idg.style.width=parseInt(Percent1+1)+"%";
		idg.style.height=parseInt(Percent1+1)+"%";
		setTimeout(function(){movePercent(idd,idg,parseInt(Percent1+5),Percent2,speed)},1000/speed);
	}
	if(parseInt(Percent1)>parseInt(Percent2))
	{
		s(idd).style.top=parseInt((100-Percent1+1)/2)+"%";
		s(idd).style.left=parseInt((100-Percent1+1)/2)+"%";
		
		idg.style.width=parseInt(Percent1-1)+"%";
		idg.style.height=parseInt(Percent1-1)+"%";

		setTimeout(function(){movePercent(idd,idg,parseInt(Percent1-5),Percent2,speed)},1000/speed);
	}
	if(Percent1==Percent2){
		return;
	}
}
//目标 距离 速度 方向
function move_length(id,length,speed,rotation)
{
	//alert(parseInt(s(id).style.top));
	var lengthX=length*Math.sin(torad(rotation));
	var lengthY=-length*Math.cos(torad(rotation));
	var speedX=Math.abs(speed*Math.sin(torad(rotation)));
	var speedY=Math.abs(speed*Math.cos(torad(rotation)));
	

	moveX(id,lengthX,speedX);
	moveY(id,lengthY,speedY);
	//alert(lengthX+"||"+lengthY)
	
}
//目标 初始值0~100 结束值 速度
function moveOpacity(id,Opacity1,opacity2,speed)
{
	if(parseInt(Opacity1)<parseInt(opacity2))
	{
		s(id).style.opacity=Opacity1/100;
		s(id).style.opacity=Number(s(id).style.opacity)+0.1;
		setTimeout(function(){moveOpacity(id,parseInt(Opacity1+10),opacity2,speed)},1000/speed);
	}
	if(parseInt(Opacity1)>parseInt(opacity2))
	{
		s(id).style.opacity=Opacity1/100;
		s(id).style.opacity=Number(s(id).style.opacity)-0.1;
		setTimeout(function(){moveOpacity(id,parseInt(Opacity1-10),opacity2,speed)},1000/speed);
	}
	if(Opacity1==opacity2){
		return;
	}
}
function BtnmoveX(id,lengthX,speedX)
{
	if(lengthX>=10)
	{
		s(id).style.left=parseInt(s(id).style.left)+10+"px";
		setTimeout(function(){BtnmoveX(id,parseInt(lengthX-10),speedX)},1000/speedX);
	}
	if(lengthX<=-10)
	{
		s(id).style.left=parseInt(s(id).style.left)-10+"px";
		setTimeout(function(){BtnmoveX(id,parseInt(lengthX+10),speedX)},1000/speedX);
	}
}
function BtnmoveY(id,lengthY,speedX)
{
	if(lengthY>=1)
	{
		s(id).style.top=parseInt(s(id).style.top)+1+"px";
		setTimeout(function(){BtnmoveY(id,parseInt(lengthY-1),speedX)},1000/speedX);
	}
	if(lengthY<=-1)
	{
		s(id).style.top=parseInt(s(id).style.top)-1+"px";
		setTimeout(function(){BtnmoveY(id,parseInt(lengthY+1),speedX)},1000/speedX);
	}
}
//目标 距离 速度
function moveX(id,lengthX,speedX)
{
	if(lengthX>=1)
	{
		s(id).style.left=parseInt(s(id).style.left)+1+"px";
		setTimeout(function(){moveX(id,parseInt(lengthX-1),speedX)},1000/speedX);
	}
	if(lengthX<=-1)
	{
		s(id).style.left=parseInt(s(id).style.left)-1+"px";
		setTimeout(function(){moveX(id,parseInt(lengthX+1),speedX)},1000/speedX);
	}
}
function moveY(id,lengthY,speedY)
{
	if(lengthY>=1)
	{
		s(id).style.top=parseInt(s(id).style.top)+1+"px";
		setTimeout(function(){moveY(id,parseInt(lengthY-1),speedY)},1000/speedY);
	}
	if(lengthY<=-1)
	{
		s(id).style.top=parseInt(s(id).style.top)-1+"px";
		setTimeout(function(){moveY(id,parseInt(lengthY+1),speedY)},1000/speedY);
	}
}

//替换图片
function changeimg(i,src)
{
	s(i).src=src;
}

//显示和隐藏
function show(elem)
{
	s(elem).style.display="block";
}
function hide(elem)
{
	s(elem).style.display="none";
}

//预加载
function preLoadImgs()
{	
	var aImg=[];
	for(var i=0; i<preLoadImgs.arguments.length; i++)
	{
		aImg[i]=new Image();
		aImg[i].src=preLoadImgs.arguments[i];
	};	
};
//============================================================================================================