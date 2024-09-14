//拖拽
function Drag(obj,endFn,dragArr,ansArr){
	var index,startPos,startH,startW,disX,disY;
	var topA=0,
		leftA=0;
	this.dragArr=dragArr,
	this.ansArr=ansArr;
	this.dragFun=function(){
		obj.on(start,myStart=function(e){
			var ev = e.type == 'touchstart' ? e.originalEvent.touches[0] : e;
			index=obj.index($(this));
			obj.eq(index).css({
	            '-webkit-transform':'scale(1)',
	            'transform':'scale(1)'
	        });
			startH=obj.eq(index).outerHeight();
			startW=obj.eq(index).outerWidth();
			startPos=$(this).position();
			disX=ev.pageX-startPos.left;
			disY=ev.pageY - startPos.top;
			$(document).on(move,myMove);
			$(document).on(end, myEnd);
			return false;
		});
	}
	this.dragOff=function(num){
		obj.eq(num).off(start,myStart);
	}
	this.reStart=function(){
		for (var i = 0; i < obj.length; i++) {
			dragPosPre(obj,i);
		}
		for (var i = 0; i < dragArr.length; i++) {
			dragArr[i]=0;
		}
		obj.on(start,myStart);
	}
	function myMove(e){
		var ev = e.type == 'touchmove' ? e.originalEvent.touches[0] : e;
		leftA=(ev.pageX-disX);
		topA=(ev.pageY-disY);
		obj.eq(index).css('z-index',1);
		if(leftA<0)
		{
			leftA=0;
		}
		if(topA<0)
		{
			topA=0;
		}
		dixW=1280-startW;
		dixH=720-startH;
		if(topA>dixH)
		{
			topA=dixH;
		}
		if(leftA>dixW)
		{
			leftA=dixW;
		}	
		obj.eq(index).css('left',leftA);
		obj.eq(index).css('top',topA);
	}
	function myEnd(e){
		var ev = e.type == 'touchend' ? e.originalEvent.changedTouches[0] : e;
		obj.eq(index).css('z-index',0);
		if (endFn) {
			endFn(obj,index,dragArr,ansArr);
		}
		$(document).off(end, myEnd);
		$(document).off(move,myMove);
	}
	//objAns.addClass('animated fadeInUp').show();
}
Drag.prototype={
	constructor:Drag,
	//选择后的答案对比；
	compareA:function(){
		return this.ansArr.toString()==this.dragArr.toString();
	}
}
function dragEnd(obj,num,dragArr,ansArr){
	obj.eq(num).css({
        '-webkit-transform':'scale(0.98)',
        'transform':'scale(0.98)'
    });
    if(dragArr.indexOf(num+1)!=-1){
    	dragArr[dragArr.indexOf(num+1)]=0;
    }
	if(impact(obj.eq(num),$('.hot').eq(0)) && ansArr[0]==num+1){
		if (dragArr[0]!=0) {
			dragPosPre(obj,dragArr[0]-1);
		}
		var objL=70.8;
		obj.eq(num).css('left',objL+'px');
		var objT=(parseFloat($('.hot').eq(0).css('height'))-parseFloat(obj.eq(num).css('height')))/2+parseFloat($('.hot').eq(0).css('top'));
		obj.eq(num).css('top',objT+'px');
		dragArr[0]=num+1;
		drag.dragOff(num);
		creatVoice('right');
	}else if(impact(obj.eq(num),$('.hot').eq(1)) && ansArr[1]==num+1){
		if (dragArr[1]!=0) {
			dragPosPre(obj,dragArr[1]-1);
		}
		var objL=70.8;
		obj.eq(num).css('left',objL+'px');
		var objT=(parseFloat($('.hot').eq(0).css('height'))-parseFloat(obj.eq(num).css('height')))/2+parseFloat($('.hot').eq(1).css('top'));
		obj.eq(num).css('top',objT+'px');
		dragArr[1]=num+1;
		drag.dragOff(num);
		creatVoice('right');
	}else if(impact(obj.eq(num),$('.hot').eq(2)) && ansArr[2]==num+1){
		if (dragArr[2]!=0) {
			dragPosPre(obj,dragArr[2]-1);
		}
		var objL=70.8;
		obj.eq(num).css('left',objL+'px');
		var objT=(parseFloat($('.hot').eq(0).css('height'))-parseFloat(obj.eq(num).css('height')))/2+parseFloat($('.hot').eq(2).css('top'));
		obj.eq(num).css('top',objT+'px');
		dragArr[2]=num+1;
		drag.dragOff(num);
		creatVoice('right');
	}else if(impact(obj.eq(num),$('.hot').eq(3)) && ansArr[3]==num+1){
		if (dragArr[3]!=0) {
			dragPosPre(obj,dragArr[3]-1);
		}
		var objL=70.8;
		obj.eq(num).css('left',objL+'px');
		var objT=(parseFloat($('.hot').eq(0).css('height'))-parseFloat(obj.eq(num).css('height')))/2+parseFloat($('.hot').eq(3).css('top'));
		obj.eq(num).css('top',objT+'px');
		dragArr[3]=num+1;
		drag.dragOff(num);
		creatVoice('right');
	}else if(impact(obj.eq(num),$('.hot').eq(4)) && ansArr[4]==num+1){
		if (dragArr[4]!=0) {
			dragPosPre(obj,dragArr[4]-1);
		}
		var objL=70.8;
		obj.eq(num).css('left',objL+'px');
		var objT=(parseFloat($('.hot').eq(0).css('height'))-parseFloat(obj.eq(num).css('height')))/2+parseFloat($('.hot').eq(4).css('top'));
		obj.eq(num).css('top',objT+'px');
		dragArr[4]=num+1;
		drag.dragOff(num);
		creatVoice('right');
	}else{
		obj.eq(num).css({
	        '-webkit-transform':'scale(1)',
	        'transform':'scale(1)'
	    });
	    dragPosPre(obj,num);
	    creatVoice('wrong');
	}
	if (dragArr.indexOf(0)==-1) {
		$('#showCont0').hide();
		CreatVid('videoMP4',"video/m2_2");
		getID('videoMP4').onended = function(){
			clearVideo();
			//$('#showCont'+index).show();
		}
		initVideoControls(getId('videocontrolsbar'),getId('videoMP4'));
	}else{
		
	}
}
function dragPosPre(obj,num){
	obj.eq(num).css({
        '-webkit-transform':'scale(1)',
        'transform':'scale(1)'
    });
	switch(num){
		case 0: obj.eq(num).css({'left':'665.5px','top':'177.5px'});
		break;
		case 1: obj.eq(num).css({'left':'665.5px','top':'255.5px'});
		break;
		case 2: obj.eq(num).css({'left':'665.5px','top':'337.5px'});
		break;
		case 3: obj.eq(num).css({'left':'665.5px','top':'416.5px'});
		break;
		case 4: obj.eq(num).css({'left':'665.5px','top':'496.5px'});
		break;
	}
}
function impact(obj, dobj,boole) {  
	var o = { 
		 x:parseInt(obj.css('left')),  
		 y:parseInt(obj.css('top')),  
		 w:parseInt(obj.css('width')),  
		 h:parseInt(obj.css('height'))
	} 

	var d = {  
		 x:parseInt(dobj.css('left')),  
		 y:parseInt(dobj.css('top')),  
		 w:parseInt(dobj.css('width')),  
		 h:parseInt(dobj.css('height'))  
	} 
	var px, py; 
	px = o.x <= d.x ? d.x : o.x;  
 	py = o.y <= d.y ? d.y : o.y;  

 // 判断点是否都在两个对象中  
	 if (px >= o.x && px <= o.x + o.w && py >= o.y && py <= o.y + o.h && px >= d.x && px <= d.x + d.w && py >= d.y && py <= d.y + d.h) {  
		 return true;  
	 } else {  
		 return false;  
	 }  
}
var voiceArr=['right','wrong'];
function creatVoiceObj(src,arrVoice,typeVoice){
	var obj=new Object();
	obj.arrVoice=arrVoice;
	for(var i=0; i<arrVoice.length;i++){
		obj[arrVoice[i]] = new Audio();
		obj[arrVoice[i]].src = src+arrVoice[i]+typeVoice;	
	}
	return obj;
}
var voiceObj=creatVoiceObj('m2/',voiceArr,'.mp3');
function preloadVoice(){
	for(var i=0; i<voiceObj.arrVoice.length;i++){
		var obj=voiceObj[voiceObj.arrVoice[i]];
		if (obj.currentTime>0) {
			obj.pause();
		} else {
			obj.play();
			obj.pause();
		}
	}
	document.removeEventListener('touchstart',preloadVoice, false); 
}
function creatVoice(str){
	for(var i=0; i<voiceObj.arrVoice.length;i++){
		var obj=voiceObj[voiceObj.arrVoice[i]];
		obj.currentTime=0;
		obj.pause();
	}
	voiceObj[str].play();
}
document.addEventListener('touchstart',preloadVoice, false);