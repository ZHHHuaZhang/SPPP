/*
updated on 20160204
15:00
*/
//********块操作方法********
//get element
function getID(id){	
	return document.getElementById(id);
}
//hide element
function Hide(id){
	getID(id).style.display = "none";
}
//hide element
function Show(id){
	getID(id).style.display = "block";
}
//hied all element
function Hidebyclassname(classname){
	var btn = document.getElementsByClassName(classname);
	for(i=0;i<btn.length;i++){
		btn[i].style.display = "none";
	}
}
//show all element
function Showbyclassname(classname){
	var btn = document.getElementsByClassName(classname);
	for(i=0;i<btn.length;i++){
		btn[i].style.display = "block";
	}
}
//set Listener(id)
function SetListener(id,name,event){
	getID(id).addEventListener(event,name,false);
}
//remove Listener
function RemoveListener(id,name,event){
	getID(id).removeEventListener(event,name,false);
}
//set Listener(classname)
function Setclickbtn(event,name,fun){
	var btn = document.getElementsByClassName(name);
	for(i=0;i<btn.length;i++){
		btn[i].addEventListener(event,fun,false);
	}
}
function Removeclickbtn(event,name,fun){
	var btn = document.getElementsByClassName(name);
	for(i=0;i<btn.length;i++){
		btn[i].removeEventListener(event,fun,false);
	}
}
//set div
function Setdiv(id,num,top,left,width,height){
	var div = getID(id);
	div.style.left = left+"px";
	div.style.top = top+"px";
	div.style.width = width+"px";
	div.style.height = height+"px";
	div.style.position = "absolute";
	div.style.zIndex = num;
}
//set zIndex
function setzindex(id,num){
	getID(id).style.position = "absolute";
	getID(id).style.zIndex = num;
}
//set pic by px(id)
function Setpic(id,name,top,left,width,height){
	var pic = getID(id);
	pic.src = "images/"+name;
	pic.style.top = top+"px";
	pic.style.left = left+"px";
	pic.style.width = width+"px";
	pic.style.height = height+"px";
}
function Setfood(id,name,top,left){
	var pic = getID(id);
	pic.src = "images/"+name;
	pic.style.top = top+"px";
	pic.style.left = left+"px";
	pic.style.opacity = 0;
}
//批量添加图片
function creatpic(left,top,id,src,num){
	for(i=0;i<num;i++){
		var pics = getID(id[i]);
		pics.src = "images/"+src[i]+".png";
		pics.style.left = left[i]+"px";
		pics.style.top = top[i]+"px";
	}
}
function creatfb(left,top,id,src,num){
	for(i=0;i<num;i++){
		var pics = getID(id[i]);
		pics.src = "images/"+src[i]+".png";
		pics.style.left = left[i]+"px";
		pics.style.top = top[i]+"px";
		pics.style.display = "none";
	}
}
function CreatVid(id,url){
	getID('VIDEO').innerHTML="<video id="+id+" width='1010px' height='660px'"+" controls autoplay><source src="+url+".mp4 type='video/mp4'></video>"//width height
	getID('VIDEO').style.display= "block";
}
function ShowVid(id,url,fn){
	var str = fn+"()"
	getID('VIDEO').style.display= "block";
	getID('VIDEO').innerHTML="<video id="+id+" width='1010px' height='660px'"+" onended = '"+str+"' controls autoplay><source src="+url+".mp4 type='video/mp4'></video>"//width height
}
//
function playVid(id,url,fn){	
	getID('VIDEO').style.display= "block";
	getID('VIDEO').endedfun=fn;
	getID('VIDEO').innerHTML="<video id="+id+" controls='controls' width='1010px' height='660px' autoplay='autoplay' onended='videoMP4onended()'><source src="+url+".mp4 type='video/mp4'></video>";
	getID(id).play();
}
function videoMP4onended(){
	getID('VIDEO').innerHTML='';
	getID('VIDEO').endedfun();
}
//清除视频
function clearVideo(){
	getID('VIDEO').innerHTML = "";
	Hide('VIDEO');
}
var audio1 = new Audio,
audio2 = new Audio;
function Setchoice(m,n,id,a1,a2,sel,ans,fn,strr1){
	//var fbw_name = "fbw_"+n+".mp3";
	audio1.src = "audio/fbr.mp3";
	audio2.src = "audio/fbw.mp3";
	var none1 = [];
	for(i=0;i<ans.length;i++){
		none1[i] = 0;
	}
	//console.log(ans);
	//console.log(sel);
	//给选项添加侦听事件
	for(i=0;i<m;i++){
		var str = id+i;
		SetListener(str,clickn,"click");
	}
	//点击选项执行函数
	function clickn(){
		var str = this.id;
		var num = parseInt(str.substring(1));
		var s1 = id+num;
		var s2 = "submit1";
		var num1 = num+a1;
		var num2 = num+a2;
		var ss1 = "single";
		if(sel[num]==0){
			if(strr1==ss1){//danxuan
				for(i=0;i<m;i++){
					var ss2 = id+i;
					getID(ss2).src = "images/choice"+choice_num+"_"+i+".png";
				}
				getID(s1).src = "images/choice"+choice_num+"_"+num2+".png";
				for(i=0;i<sel.length;i++){
					sel[i] = 0;
				}
				sel[num] = 1;
			}
			else{//duoxuan
				getID(s1).src = "images/choice"+choice_num+"_"+num2+".png";
				sel[num] = 1;
			}	
		}
		else{
			getID(s1).src = "images/choice"+choice_num+"_"+num1+".png";
			sel[num] = 0;
		}
		if(sel.toString()!==none1.toString()){
			getID(s2).style.display = "block";
			SetListener(s2,checkans,"click");
		}
		else{
			RemoveListener(s2,checkans,"click");
			getID(s2).style.display = "none";
		}
	}
	function checkans(){
		var s5 = "jixu1";
		var s6 = "retry1";
		for(i=0;i<m;i++){
			var str = id+i;
			RemoveListener(str,clickn,"click");
		}
		var s2 = "submit1";
		Hide(s2);
		RemoveListener(s2,checkans,"click");
		var s3 = "fbr1";
		var s4 = "fbw1";
		if(sel.toString()==ans.toString()){
			getID(s3).style.display = "block";
			audio1.play();
			Show(s5);
			var audioTime=audio1.duration*1000-1000;
			if(audio1.readyState==4)
			{
				window.setTimeout(function(){
					$('#jixu1').addClass('finger1');
				},audioTime);	
			}
			SetListener(s5,jixufun,"click");
		}
		else{
			getID(s4).style.display = "block";
			audio2.play();
			Show(s6);
			var audioTime=audio2.duration*1000-1000;
			if(audio2.readyState==4)
			{
				window.setTimeout(function(){
					$('#retry1').addClass('finger1');
				},audioTime);
			}
			SetListener(s6,redofun,"click");
		}
	}
	function jixufun(){
		var s5 = "jixu1";
		initvo();
		RemoveListener(s5,jixufun,"click");
		fn();
		$('#jixu1').removeClass('finger1');
		$('#retry1').removeClass('finger1');
	}
	function redofun(){
		var s6 = "retry1";
		var s7 = choice_num;
		initvo();
		RemoveListener(s6,redofun,"click");
		Hide("timu");
		topic(s7);
		$('#retry1').removeClass('finger1');
		$('#jixu1').removeClass('finger1');
		//CreatVid('videoMP4',"video/m"+s7);
		/*switch(s7){
			case 1:
				vd1onend();
				break;
			case 2:
				vd2onend();
				break;
			case 3:
				vd3onend();
				break;
			case 4:
				vd4onend();
				break;
			case 5:
				vd5onend();
				break;
			default:
				break;
		}*/
	}
	function initvo(){
		if(audio1.currentTime){
			audio1.currentTime = 0;
			audio1.pause();
		}
		if(audio2.currentTime){
			audio2.currentTime = 0;
			audio2.pause();
		}
	}
}
//set opacity from 0-1 or 1-0
function Fade(id,num,speed){
	if(num>=0.01){//fadeIn
		getID(id).style.opacity=parseFloat(getID(id).style.opacity)+0.01;
		setTimeout(function(){Fade(id,parseFloat(num-0.01),speed)},1000/speed);
	}
	if(num<=-0.01){//fadeOut
		getID(id).style.opacity=parseFloat(getID(id).style.opacity)-0.01;
		setTimeout(function(){Fade(id,parseFloat(num+0.01),speed)},1000/speed);
	}
}
function IsPC(){  
   var userAgentInfo = navigator.userAgent;  
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
   var flag = true;  
   for (var v = 0; v < Agents.length; v++) {  
	   if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
   }  
   return flag;  
}  

