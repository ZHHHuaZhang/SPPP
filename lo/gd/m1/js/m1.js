var start = IsPC() ? "mousedown" : "touchstart";
var move = IsPC() ? "mousemove" : "touchmove";
var end = IsPC() ? "mouseup" : "touchend";
//
function setMyCompleted(obj){
	window.parent.postMessage("setCompleted#"+obj,"*");
}
function totalLoPage(num){
	window.parent.postMessage("totalPage#"+num,"*");
}
function nowLoPage(num){
	window.parent.postMessage("nowPage#"+num,"*");
}
function setMyVideoState(str){
	//window.parent.postMessage("setVideoState#"+str,"*");
}
function updateMyPercent(str){
	//window.parent.postMessage("updatePercent#"+str,"*");
}
function tabToggle(num){
	window.parent.postMessage("tabToggle1#"+num,"*");
}
window.onload = function(){
	totalLoPage(25)
	nowLoPage(1);
	CreatVid('videoMP4',"video/m1");
	initVideoControls(getId('videocontrolsbar'),getId('videoMP4'));
	timeUp([0,3,29,55,73,137],1);
	getID('videoMP4').onended = function(){
		$('#selCont').show();
		//$('#cliCont').show();
		clearVideo();
	}
	$('#play').click(function(event) {
		$('#videoMP4').trigger('play');
		$(this).hide();
		/* Act on the event */
	});
	var selNum=0,selArr=[0,0,0];
	$('.selImg').on('click',clickShow);
	function clickShow(){
		var index=$('.selImg').index(this);
		$('.finger').eq(index).hide();
		$('#selCont').hide();
		$('.selImg').eq(index).attr('src', 'm1/b'+index+'.png');
		$('#show').attr('src', 'm1/show'+index+'.png');
		selArr[index]=1;
		if (selArr.indexOf(0)==-1) {
			$('#continue').show();
		} 
		CreatVid('videoMP4',"video/m1_"+index);
		nowLoPage(7+index);
		initVideoControls(getId('videocontrolsbar'),getId('videoMP4'));
		getID('videoMP4').onended = function(){
			$('#selCont').show();
			$('#showCont').show();
			clearVideo();
		}
	}
	$('.sel0').on('click',selFun0=function(){
		var objThis=this;
		selFun($('.sel0'),0,0,objThis);
	});
	$('.sel1').on('click',selFun1=function(){
		var objThis=this;
		selFun($('.sel1'),1,2,objThis);
	});
	$('.sel2').on('click',selFun2=function(){
		var objThis=this;
		selFun($('.sel2'),2,0,objThis);
	});
	$('.sel3').on('click',selFun3=function(){
		var objThis=this;
		selFun($('.sel3'),3,1,objThis);
	});
	$('.sel4').on('click',selFun4=function(){
		var objThis=this;
		selFun($('.sel4'),4,2,objThis);
	});
	$('.sel5').on('click',selFun5=function(){
		var objThis=this;
		selFun($('.sel5'),5,1,objThis);
	});
	$('.sel6').on('click',selFun6=function(){
		var objThis=this;
		selFun($('.sel6'),6,2,objThis);
	})
	$('#cls').click(function(event) {
		$('#showCont').hide();
	});
	$('#continue').click(function(event) {
		$('#selCont').hide();
		// $('#selCont0').show();
		CreatVid('videoMP4',"video/m1_3");
		nowLoPage(10);
		initVideoControls(getId('videocontrolsbar'),getId('videoMP4'));
		getID('videoMP4').onended = function(){
			$('#selCont0').show();
			clearVideo();
		}
	});
	$('.cliImg').click(function(event) {
		var index=$('.cliImg').index(this);
		$('.finger0').eq(index).hide();
		$('.shadow0').eq(index).show();
		$('.fadeInDown').eq(index).show();
		console.log(index)
		$('.cont').hide();
		$('#cliCont').hide();
		CreatVid('videoMP4',"video/m1_"+(index+5));
		nowLoPage(22+index);
		initVideoControls(getId('videocontrolsbar'),getId('videoMP4'));
		if (index==3) {
			getID('videoMP4').onended = function(){
				clearVideo();
				setMyCompleted(false);
				tabToggle();
			}
		} else {
			getID('videoMP4').onended = function(){
				var flagNum=index+1;
				$('#cliCont').show();
				$('.cont').eq(flagNum).show();
				clearVideo();
			}
		}
		/* Act on the event */
	});
}
var selFun0,selFun1,selFun2,selFun3,selFun4,selFun5,selFun6;
function selFun(obj,num,rightNum,objS){
	var strFun='selFun'+num;
	var index=obj.index(objS);
	var objJ=$('#judge'+num);
	var contPre=$('#selCont'+num);
	var contNext=$('#selCont'+(num+1));
	var objL=parseInt(obj.eq(index).css('left'))+(parseInt(obj.eq(index).css('width'))-parseInt(objJ.css('width')))/2;
	objJ.css('left',objL+'px');
	objJ.show();
	obj.eq(index).attr('src', 'm1/d'+index+'.png');
	obj.off('click',eval(strFun));
	if(index==rightNum){
		creatVoice('right');
		objJ.attr('src', 'm1/right.png');
		setTimeout(function(){
			contPre.hide();
			nowLoPage(11+num);
			if(num==4){
				CreatVid('videoMP4',"video/m1_4");
				timeUp([0,36,99,123,149],17);
				initVideoControls(getId('videocontrolsbar'),getId('videoMP4'));
				getID('videoMP4').onended = function(){
					$('#cliCont').show();
					clearVideo();
					//setMyCompleted();
				}
			}else{
				contNext.show();
			}
		},2000);
	}else{
		creatVoice('wrong');
		objJ.attr('src', 'm1/wrong.png');
		setTimeout(function(){
			objJ.hide()
			obj.eq(index).attr('src', 'm1/c'+index+'.png');
			obj.on('click',eval(strFun));
		},500);
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