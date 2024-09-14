var sub0 = []; //ÓÐ¶àÉÙ¸ölo
var scoreLen = 1; //ÓÐ¶àÉÙ¸ö·ÖÊý
var scoreMergerMethod = "plus"; //plus ave
var isUpdateloAllComplete = false;
var sub0Status=new Array();
var sub1Status = 0;
var sub2Status = 0;
var subScoreList = new Array();
//操作缓存
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
         }
     }
    return "";
} 
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	console.log( document.cookie)
} 
function getsec(str)
{
	var str1 = str.substring(1, str.length) * 1;
	var str2 = str.substring(0, 1);
	if (str2 == "s")
	{
		return str1 * 1000;
	}
	else if (str2 == "h")
	{
		return str1 * 60 * 60 * 1000;
	}
	else if (str2 == "d")
	{
		return str1 * 24 * 60 * 60 * 1000;
	}
}
//这是有设定过期时间的使用示例：
//s20是代表20秒
//h是指小时，如12小时则是：h12
//d是天数，30天则：d30
//setCookie("name","hayden","s20");
//========================================
function fixSub0Status(list, len) {
	var returnList = new Array();
	for (var i = 0; i < len; i++) {
		returnList[i] = fixNumberBound(list[i], 0, 2);
	}
	return returnList;
}
function fixNumberBound(num0, num1, num2) {
	num0 = parseInt(fixToNumber(num0));
	num1 = parseInt(fixToNumber(num1));
	num2 = parseInt(fixToNumber(num2));
	if (num0 < num1) {
		return num1;
	} else if (num0 > num2) {
		return num2;
	} else {
		return num0;
	}
}
function fixNumberForScoreBound(num0, num1, num2) {
	num0 = fixToNumber(num0);
	num1 = fixToNumber(num1);
	num2 = fixToNumber(num2);
	num0 = Math.round(num0 * 10) / 10; //ËÄÉáÎåÈë,²¢±£ÁôÒ»Î»Ð¡ÊýÎ»
	if (num0 < num1) {
		return num1;
	} else if (num0 > num2) {
		return num2;
	} else {
		return num0;
	}
}
function fixScoreList(list, len) {
	var returnList = new Array();
	for (var i = 0; i < len; i++) {
		returnList[i] = fixNumberForScoreBound(list[i], 0, 100);
	}
	return returnList;
}
function fixToNumber(num) {
	num = Number(num);
	if (isNaN(num)) {
		return 0;
	} else {
		return num;
	}
}
function fixToString(str) {
	if (str == undefined) {
		return "";
	} else {
		return String(str);
	}
}
function fixToArray(arr) {
	if (arr == undefined) {
		return new Array();
	} else {
		return Array(arr);
	}
}
function getSusDataStr() {
	sub0Status = fixSub0Status(sub0Status, sub0.length);
	sub1Status = fixNumberBound(sub1Status, 0, sub0.length - 1);
	subScoreList = fixScoreList(subScoreList, scoreLen);
	console.log("UP:"+sub0Status.join(";") + "|" + sub1Status + "|" + subScoreList.join(";")+ "|" +sub2Status + "|" + ContentLOM4+"|"+String(CotnentTest))
	return sub0Status.join(";") + "|" + sub1Status + "|" + subScoreList.join(";")+ "|" +sub2Status + "|" + ContentLOM4+"|"+String(CotnentTest) ;
}
function parseSusData() {
	var getJsSusData = doLMSGetValue("cmi.suspend_data");
	//setCookie("TG_suspend_data",myArgs,"h12");
	/*var getJsCookie = getCookie("TG_suspend_data");
	if(getJsCookie==""||typeof(getJsCookie)=="undefined"||getJsCookie==null){	
			getJsSusData=getJsCookie;
	}*/
	if(getJsSusData==""||typeof(getJsSusData)=="undefined"||getJsSusData==null){
		    getJsSusData=initSusDataStr();
	}
	//var getJsSusData="2;2;2;2;2;2;2|1|0";
	var tempbig = fixToString(getJsSusData).split("|");
	sub0Status = fixSub0Status(fixToString(tempbig[0]).split(";"), sub0.length);
	sub1Status = fixNumberBound(fixToString(tempbig[1]), 0, sub0.length - 1);
	subScoreList = fixScoreList(fixToString(tempbig[2]).split(";"), scoreLen);
	sub2Status = tempbig[3];
	ContentLOM4 = tempbig[4];
	CotnentTest = tempbig[5].split(",");
	//alert(sub0Status+"   "+sub1Status+"   "+subScoreList);
	//alert(getSusDataStr())
}
function initSusDataStr(){
	var TempSusDataStr="";
	for(var i=0;i<sub0.length;i++){
		TempSusDataStr = TempSusDataStr+"0;";
	}
	TempSusDataStr = TempSusDataStr.slice(0, -1)+"|0|0|0|0,0,0,0,0,0|1,0,0,0";
	//TempSusDataStr = TempSusDataStr.slice(0, -1)+"|0|0";
	return TempSusDataStr;
}
function unloadExit() {
	unloadPage(doLMSGetValue('cmi.core.lesson_status'));
}
/////////////////////////////////////////////////////////////////////////////////////////////////
function subClick(inPoint){
	tocTabToggle(false);
	subClickNav(inPoint-1);
}
function subClickNav(inPoint) {
	sub1Status = fixToNumber(inPoint);
	if (sub0Status[sub1Status] == 0) {
		sub0Status[sub1Status] = 1;
	}
	updateClickNav();
	updateSusData();
	document.getElementById("iframeLo").src = sub0[sub1Status];
	ClickContentBtnMC();
}
var timer1,timer2;
function updateSusData(isUpdateScore) {
	//window.clearTimeout(timer1);
	//window.clearTimeout(timer2);
	var myArgs = getSusDataStr();
	var USScore = getMergerScore(subScoreList);
	//setCookie("TG_suspend_data",myArgs,0.5);
	doLMSSetValue("cmi.suspend_data", myArgs);
	if (isUpdateScore == true) {
		//alert("US="+USScore);
		doLMSSetValue("cmi.core.score.raw", USScore);
	}
	if (isAllLoComplete() == true) {
		if (isUpdateloAllComplete == false) {
			isUpdateloAllComplete = true;
			doLMSSetValue("cmi.core.lesson_status", "completed");
		}
		
	}
	/*timer1=window.setTimeout(function(){$('#alertDiv').show();$('.button').eq(0).show();$('.button').eq(1).hide();$('#timeNum').html("Your session will expire in 15 minutes due to inactivity. Please continue to complete the module or the learning record will be lost after the session has timed out. ")},780000);
	timer2=window.setTimeout(function(){$('#alertDiv').show();$('.button').eq(1).show();$('.button').eq(0).hide();$('#timeNum').html("Your session has timed out due to inactivity. Please click the window\'s \'X\' button to exit the ebriefing. ")},900000);*/
	doLMSCommit();
}
function getMergerScore(list) { //ÀÛ¼Ó·Ö
	var cumulativeNum = 0;
	for (var i = 0; i < list.length; i++) {
		cumulativeNum += list[i];
	}
	var returnNum = (scoreMergerMethod == "ave") ? cumulativeNum / list.length: cumulativeNum;
	return fixNumberForScoreBound(returnNum, 0, 100).toString();
}
function isAllLoComplete() { //ÊÇ·ñÈ«²¿¿Î³ÌÍê³É
	for (var i = 0; i < sub0Status.length; i++) {
		if (sub0Status[i] != 2) {
			return false;
		}
	}
	return true;
}
function isSectionLoComplete() { //ÊÇ·ñ1-3Íê³É
	for (var i = 1; i < sub0Status.length-1; i++) {
		if (sub0Status[i] != 2) {
			return false;
		}
	}
	return true;
}
/*
function totalPage(num){
	var img = document.getElementById("progresspoint");
	img.totalPage=fixToNumber(num);
	if(img.totalPage<1){
		img.totalPage=1;
	}
}
function currentPage(num){
	var img = document.getElementById("progresspoint");
	img.currentPage=Math.min(fixToNumber(num),fixToNumber(img.totalPage));
	if(img.currentPage<0){
		img.currentPage=0;
	}
	var div=img.parentNode.parentNode;
	div.style.left=(img.initLeftValue+img.widhtValue*(img.currentPage/img.totalPage))+"px";
	playPauseTabToggle(true);
}
*/
function totalPage(num){
	var img = document.getElementById("progresspoint");
	var tmpNum=0;
	for(var i=0;i<totalPageList.length;i++){
		tmpNum+=totalPageList[i];
	}
	//img.totalPage=tmpNum;
	img.totalPage=num;
	img.initPage = "-22px";
	//img.initPage = acafc("progresspoint","div",2).style.left;
}
function currentPage(num){
	var img = document.getElementById("progresspoint");
	var tmpPage=Math.min(fixToNumber(num),totalPageList[sub1Status]);
	if(tmpPage<0){
		tmpPage=0;
	}
	var tmpNum=0;
	for(var i=0;i<sub1Status;i++){
		tmpNum+=totalPageList[i];
	}
	
	img.currentPage=tmpPage+tmpNum;
	img.currentPage=num;
	var strSpan=img.currentPage+'/'+img.totalPage;
	$('#navText span').html(strSpan);
	acafc("progresspoint","div",1).style.width=parseInt(acafc("progresspoint","div",0).style.width)*(img.currentPage/img.totalPage)+"px";
	acafc("progresspoint","div",2).style.left=(parseInt(img.initPage)+parseInt(acafc("progresspoint","div",0).style.width)*(img.currentPage/img.totalPage))+"px";
	//var div=img.parentNode.parentNode;
	//div.style.left=(img.initLeftValue+img.widhtValue*(img.currentPage/img.totalPage))+"px";
	//playPauseTabToggle(true);
}
function nowPage(num){
	currentPage(num)
}
function setCompleted(obj){
	sub2Status = 0;
	sub0Status[sub1Status]=2;
	updateCompleted();
	if(obj==false) {//²»Ìøµ½Ï1407ÂÒ»¸ölo
		updateSusData();
		return;
	}
	if(sub1Status<sub0Status.length-1) {
		subClickNav(sub1Status+1);
	}else{
		updateSusData();
		afc("contentMask_mc","d","block");
	}
	// if(completeSub0(0,8)){
	// 		subClickNav(9);
	// }else if(sub1Status<sub0Status.length-2) {//´æÔÚÒ»¸ö²âÊÔÕÂ½Ú
	// 	subClickNav(sub1Status+1);
	// }else{
	// 	updateSusData();
	// 	playsound("img/vo.mp3");
	//     afc("contentMask_mc","d","block");
	// }
}
function setLoCompleted(){
	sub2Status = 0;
	sub0Status[sub1Status]=2;
	updateCompleted();
	updateSusData();
}
function updataScore(scoreNum,idx){
	var tmpScore = fixToNumber(scoreNum);
	var tmpIdx = fixNumberBound(fixToNumber(idx), 0, scoreLen - 1);
	subScoreList[tmpIdx] = fixNumberForScoreBound(Math.max(subScoreList[tmpIdx], tmpScore), 0, 100);
	updateUpdataScore();
	updateSusData(true);
}
function prevActivity(){
	if(sub1Status>0){
		subClickNav(sub1Status-1);
	}
}
function nextActivity(){
	if(sub1Status<sub0Status.length-1){
		subClickNav(sub1Status+1);
	}
}
function setSubStatusNav(inPoint,thisStatus){
	var tmp = fixNumberBound(inPoint, 0, sub0Status.length-1);
	var tmpV = fixNumberBound(thisStatus, 0, 2);
	sub0Status[tmp]=Math.max(sub0Status[tmp],tmpV);
	updateSusData();
}
function getSubStatusNav(inPoint) {
	var tmp = fixNumberBound(inPoint, 0, sub0Status.length-1);
	return sub0Status[tmp];
}
function completeSub0(a, b) {
	for (var i = a; i<(b+1); i++) {
		if (sub0Status[i] != 2) {
			return false;
		}
	}
	return true;
}
function incompleteSub0(a, b) {
	for (var i = a; i<(b+1); i++) {
		if (sub0Status[i]>=1) {
			return true;
		}
	}
	return false;
}
function updateClickNav() {
	
}
function updateCompleted() {
	
}
function updateUpdataScore() {
	
}
var isWaitDelayedsetCompleted=false;
window.addEventListener("message",messageHandler,true);
function messageHandler(e){
	var dataStr=e.data;
	var list=dataStr.split("#");
	if(list[0]=="clickQuit"){
		clickQuit();
	}else if(list[0]=="subClick"){
		var idx=fixToNumber(list[1]);
		subClick(idx);
	}else if(list[0]=="isShowVideo"){
		isShowVideo = list[1];
		if(list[2]!=0){
		subClick(list[2]);
		}
	}else if(list[0]=="subClickNav"){
		var idx=fixToNumber(list[1]);
		subClickNav(idx);
	}else if(list[0]=="setLoCompleted"){
		setLoCompleted();
	}else if(list[0]=="playPauseBtn"){
		playPauseBtn();
	}else if(list[0]=="unNav"){
		unNav();
	}else if(list[0]=="tabToggle"){
		tabToggle();
	}else if(list[0]=="fingerShow"){
		fingerShow();
	}else if(list[0]=="tabToggle1"){
		tabToggle1();
	}else if(list[0]=="setCompleted"){
		if(list[1]=="false"){
			setCompleted(false);
		}else if(list[1]=="true"){
			setCompleted(true);
		}else{
			if(!isWaitDelayedsetCompleted){
				isWaitDelayedsetCompleted=true;
				setCompleted();
				setTimeout(function(){isWaitDelayedsetCompleted=false;},1000); 
			}
		}
	}else if(list[0]=="updataScore"){
		updataScore(list[1],list[2]);
	}else if(list[0]=="setSubStatusNav"){
		setSubStatusNav(list[1],list[2]);
	}else if(list[0]=="setCurrentLoIdx"){
		sub1Status=fixNumberBound(list[1],0,sub0.length-1);
	}else if(list[0]=="prevActivity"){
		prevActivity();
	}else if(list[0]=="nextActivity"){
		nextActivity();
	}else if(list[0]=="totalPage"){
		totalPage(list[1]);
	}else if(list[0]=="nowPage"){
		nowPage(list[1])
	}else if(list[0]=="getCurrentLoIdx"){
		document.getElementById("iframeLo").contentWindow.postMessage("getCurrentLoIdx#"+sub1Status+"#"+list[2],"*");
	}else if(list[0]=="getListSubStatus"){
		var tmpListSubStatus=list[1].split("");
		var returnListSubStatus=new Array();
		for(var i=0;i<tmpListSubStatus.length;i++){
			returnListSubStatus[i]=getSubStatusNav(tmpListSubStatus[i]);
		}
		document.getElementById("iframeLo").contentWindow.postMessage("getListSubStatus#"+returnListSubStatus.join("")+"#"+list[2],"*");
	}else if(list[0]=="getListSubScore"){
		var tmpListSubScore=list[1].split("");
		var returnListSubScore=new Array();
		for(var i=0;i<tmpListSubScore.length;i++){
			returnListSubScore[i]=subScoreList[fixNumberBound(tmpListSubScore[i],0,subScoreList.length-1)];
		}
		document.getElementById("iframeLo").contentWindow.postMessage("getListSubScore#"+returnListSubScore.join(";")+"#"+list[2],"*");
	}else if(list[0]=="getAllSubStatus"){
		document.getElementById("iframeLo").contentWindow.postMessage("getAllSubStatus#"+sub0Status.join("")+"#"+list[2],"*");
	}else if(list[0]=="getAllSubScore"){
		document.getElementById("iframeLo").contentWindow.postMessage("getAllSubScore#"+subScoreList.join(";")+"#"+list[2],"*");
	}else if(list[0]=="getisShowVideo"){
		document.getElementById("iframeLo").contentWindow.postMessage("getisShowVideo#"+sub0Status.join("")+"#"+isShowVideo,"*");
	}else if(list[0]=="customFun"){
		try{
			eval(list[1])(list[2],list[3]);
		} catch(e){
		}
	}
}