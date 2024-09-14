var rightAns=new Array(1,1,1,1);
var YourAns=new Array(0,0,0,0);
var rightAns2=new Array(5,3,6,7,2,4,1);
var YourAns2=new Array(0,0,0,0,0,0,0);
var test2_isDragNum=0;
var test2_allDragNum=0;
function Drag1(obj,arrS,arrN){
	this.arrN=arrN;
	this.arrS=arrS;
	var index,startPos,startH,startW,disX,disY;
	var topA=0;
	var leftA=0;
	this.dragFun=function(){
		obj.on(start,myStart=function(e){
			var ev = e.type == 'touchstart' ? e.originalEvent.touches[0] : e;
			index=obj.index(myjq(this));
			startH=obj.eq(index).outerHeight();
			startW=obj.eq(index).outerWidth();
			startPos=myjq(this).position();
			disX=ev.pageX-startPos.left;
			disY=ev.pageY - startPos.top;
			myjq(document).on(move,myMove);
			myjq(document).on(end, myEnd);
			obj.eq(index).css({
	            '-webkit-transform':'scale(1)',
	            'transform':'scale(1)'
	        });
			return false;
		});
	}
	this.dragEnd=function(){
		obj.off(start,myStart);
	}
	this.reStart=function(){
		for (var i = 0; i < obj.length; i++) {
			dragPos(i);
			myjq('.sel3').eq(i).attr('src', 'images/e'+index+'.png');
			obj.show();
		}
		for (var i = 0; i < arrS.length; i++) {
			arrS[i]=0;
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
		if(impact(obj.eq(index),myjq('#drag_hit'))){
			if(rightAns[index]==1){
				YourAns[index]=1;
				audioaright.load();
				audioaright.play();
				audioawrong.pause();
				prePos(obj,index);
				myjq(".drag").eq(index).css('display','none');
				myjq(".drag_wenzi").eq(index).css('display','none');
				myjq("#show_"+(index+1)).css('display','block');
				if(YourAns.toString()==rightAns.toString()){
					setTimeout(isAllRight,500);
				}
			}else{
				audioawrong.load();
				audioawrong.play()
				audioaright.pause();
				prePos(obj,index);
			}
		}else{
			audioawrong.load();
			audioawrong.play()
			audioaright.pause();
			prePos(obj,index);
		}
		myjq(document).off(end, myEnd);
		myjq(document).off(move,myMove);
	}
	function isAllRight(){
			var audioaright2=new Audio();
			audioaright2.src="m2/right.mp3"
			audioaright2.load();
			audioaright2.play();
			myjq("#drag_fk").css('display','block');
			myjq('#drag_fk_content').addClass('animated fadeInUp').show();
		}
}
//初始位置
function prePos(obj,num){
	switch(num){
		case 0: obj.eq(num).css({left: '140.1px',top: '211.95px',display:'block'});
		break;
		case 1: obj.eq(num).css({left: '445.9px',top: '219.95px',display:'block'});
		break;
		case 2: obj.eq(num).css({left: '741.3px',top: '242px',display:'block'});
		break;
		case 3: obj.eq(num).css({left: '1041.2px',top: '240.25px',display:'block'});
		break;
	}
}
/*Drag1.prototype={
	constructor:Drag,
	//选择后的答案对比；
	compareA:function(){
		return this.arrN.toString()==this.arrS.toString()
	}
}*/

function Drag2(obj,arrS,arrN){
	var audioaDragright=new Audio();
	audioaDragright.src="m3/test_right.mp3";
	var audioaDragwrong=new Audio();
	audioaDragwrong.src="m3/test_wrong.mp3";
	this.arrN=arrN;
	this.arrS=arrS;
	var index,startPos,startH,startW,disX,disY;
	var topA=0;
	var leftA=0;
	this.dragFun=function(){
		obj.on(start,myStart=function(e){
			var ev = e.type == 'touchstart' ? e.originalEvent.touches[0] : e;
			index=obj.index(myjq(this));
			startH=obj.eq(index).outerHeight();
			startW=obj.eq(index).outerWidth();
			startPos=myjq(this).position();
			disX=ev.pageX-startPos.left;
			disY=ev.pageY - startPos.top;
			myjq(document).on(move,myMove);
			myjq(document).on(end, myEnd);
			obj.eq(index).css({
	            '-webkit-transform':'scale(1)',
	            'transform':'scale(1)'
	        });
			return false;
		});
	}
	this.dragEnd=function(){
		obj.off(start,myStart);
	}
	this.reStart=function(){
		for (var i = 0; i < obj.length; i++) {
			dragPos(i);
			myjq('.sel3').eq(i).attr('src', 'images/e'+index+'.png');
			obj.show();
		}
		for (var i = 0; i < arrS.length; i++) {
			arrS[i]=0;
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
		if(impact(obj.eq(index),myjq('#drag_hit'))){
			if(rightAns2[test2_isDragNum]==index+1){
				test2_allDragNum++;
				YourAns2[test2_isDragNum]=index+1;
				prePos2(obj,index);
				audioaDragright.load();
				audioaDragright.play();
				audioaDragwrong.pause();
				myjq(".drag").eq(index).attr('src','m3/drag.png');
				myjq(".drag").eq(index).unbind();
				myjq(".drag").eq(index).css('cursor','auto');
				myjq("#drag_hit").attr('src','m3/drag'+(index+1)+'.png');
				if(YourAns2.toString()==rightAns2.toString()){
					myjq("#jixu_btn1").css('display','block');
				}
				myjq('#drag_mask').show();
				setTimeout(Dragover1,500);
				
				function Dragover1(){
					myjq("#drag_hit").hide();
					myjq('#drag_content').hide();
					myjq('#drag_content').attr('src','m3/drag_contentB'+(test2_isDragNum+1)+'.png');
					myjq('#drag_content').addClass('animated fadeIn').show();
					if(test2_allDragNum<7){
						setTimeout(Dragover2,3000);
					}else{
					  myjq('#pre_btn').hide();
			          myjq('#next_btn').hide();
					}
				}
				function Dragover2(){
					myjq('#drag_mask').hide();
					myjq('#drag_content').removeClass('animated fadeIn').show();
					test2_isDragNum++;
					if(test2_isDragNum>=6){
						test2_isDragNum=6;
					}
		            if(YourAns2[test2_isDragNum]==0){
			           myjq('#drag_hit').attr('src','m3/drag_hit.png')
		            }else{
			           myjq('#drag_hit').attr('src','m3/drag'+(YourAns2[test2_isDragNum])+'.png')
		            }
		            CheckZT();
				}
				function CheckZT(){
	              	if(test2_isDragNum<=0){
			        myjq('#pre_btn').hide();
			        myjq('#next_btn').show();
		        }else if(test2_isDragNum>0&&test2_isDragNum<6){
			        myjq('#pre_btn').show();
			        myjq('#next_btn').show();
		        }else{
		        	myjq('#pre_btn').show();
		        	myjq('#next_btn').hide();
		        }
		        myjq("#drag_hit").show();
		        myjq('#drag_content').attr('src','m3/drag_content'+(test2_isDragNum+1)+'.png');
		        myjq('#drag_ts').attr('src','m3/drag_ts'+(test2_isDragNum+1)+'.png');
	              }
			}else{
				audioaDragwrong.load();
				audioaDragwrong.play()
				audioaDragright.pause();
				prePos2(obj,index);
			}
		}else{
			    audioaDragwrong.load();
				audioaDragwrong.play()
				audioaDragright.pause();
				prePos2(obj,index);
		}
		myjq(document).off(end, myEnd);
		myjq(document).off(move,myMove);
	}
	function isAllRight(){
			var audioaright2=new Audio();
			audioaright2.src="m2/right.mp3"
			audioaright2.load();
			audioaright2.play();
			myjq("#drag_fk").css('display','block');
			myjq('#drag_fk_content').addClass('animated fadeInUp').show();
		}
}
//初始位置
function prePos2(obj,num){
	switch(num){
		case 0: obj.eq(num).css({left: '161.75px',top: '144.6px',display:'block'});
		break;
		case 1: obj.eq(num).css({left: '302.45px',top: '144.6px',display:'block'});
		break;
		case 2: obj.eq(num).css({left: '444.65px',top: '144.6px',display:'block'});
		break;
		case 3: obj.eq(num).css({left: '585.45px',top: '144.6px',display:'block'});
		break;
		case 4: obj.eq(num).css({left: '726.4px',top: '144.6px',display:'block'});
		break;
		case 5: obj.eq(num).css({left: '866.4px',top: '144.6px',display:'block'});
		break;
		case 6: obj.eq(num).css({left: '1009.4px',top: '144.6px',display:'block'});
		break;
	}
}
/*Drag2.prototype={
	constructor:Drag,
	//选择后的答案对比；
	compareA:function(){
		return this.arrN.toString()==this.arrS.toString()
	}
}*/
//检测两个对象是否碰撞
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
