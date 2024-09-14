//getAllSubStatus();
function getID(id) {
    return document.getElementById(id);
}
//设置s位
function timeUp(arr, num) {
    var timeNum = num;
    var timeFlag = 0;
    var timeBo = true;
    getID('videoMP4').addEventListener("timeupdate", timePoint, false);
    getID('videoMP4').addEventListener("seeked", timeSeek, false);

    function timePoint() {
        var curT = this.currentTime;
        //num++;
        // console.log(curT)
        if (curT > arr[timeFlag]) {
            timeBo = true;
        }
        for (var i = 0; i < arr.length; i++) {
            if (curT > arr[i] && curT < arr[i + 1] && i < arr.length - 1 && timeBo == true) {
                $('#play').hide();
                timeFlag = i + 1;
                nowLoPage(num + i);
                timeBo = false;
                //console.log(num + i);
                break;
            } else if (curT > arr[i] && i == arr.length - 1 && timeBo == true) {
                nowLoPage(num + i);
                timeBo = false;
                timeFlag = i + 1;
                //console.log(num + i);
                break;
            }
        }
    }

    function timeSeek() {
        getID('videoMP4').removeEventListener("timeupdate", timePoint, false);
        var curT = this.currentTime;
        timeBo = true;
        for (var i = 0; i < arr.length; i++) {
            if (curT > arr[i] && curT < arr[i + 1] && i < arr.length - 1) {
                timeFlag = i + 1;
                break;
            } else if (curT > arr[i] && i == arr.length - 1) {
                timeFlag = i + 1;
                break;
            }
        }
        getID('videoMP4').addEventListener("timeupdate", timePoint, false);
    }
}


//frank

//创建热区

function createIMG(src, x, y,insertspace="content",id) {
    var name = document.createElement("img");
    name.src = "".concat(src);
    name.style.left = "".concat(x, "px");
    name.style.top = "".concat(y, "px");
    name.id=`${id}`;
    console.log(`${name}`);
    document.getElementById(`${insertspace}`).appendChild(name);
    return name;
  }

function createHotsport(width, height, x, y, id, insertspace) {
    let hotsport = document.createElement("div");
    console.log(hotsport);
    hotsport.id = id;
    hotsport.style.width = `${width}px`;
    hotsport.style.height = `${height}px`;
    hotsport.style.left = `${x}px`;
    hotsport.style.top = `${y}px`;
    hotsport.style.cursor = "pointer";
    hotsport.style.position = "absolute";
    document.getElementById(`${insertspace}`).appendChild(hotsport);
    return hotsport;
    // console.log("create hotsport");
  }

//多项选择题 导出选项id q${num}choose${i} 类推 q1choose1 多项错误反馈wrong${num}_${ucnum}
function createCont(num,cheekX=995,cheekY=445,questionX=82,questionY=191,questionNum,optionX=91,optionYARR,rNum,isend=false,wrongF=1){
    let ucnum=0;
    let content=document.getElementById("content");
    console.log(content);
    let cont=document.createElement("div");

    content.appendChild(cont);
    cont.id=`cont${num}`;
    console.log("now create")
    cont.style.display="none";
    cont.style.position="absolute";

    createIMG(`img/cheek${num}.png`,cheekX,cheekY,`cont${num}`,`cheek${num}`);
    createIMG(`img/question${num}.png`,questionX,questionY,`cont${num}`,`cheek${num}`);
    for(let i=1;i<=questionNum;i++){
    createIMG(`img/q${num}choose${i}_1.png`,optionX,optionYARR[i-1],`cont${num}`,`q${num}choose${i}`).onclick=chooseBtn.bind(this,i);
    }
    for(let i=1;i<=questionNum;i++){
        document.getElementById(`q${num}choose${i}`).style.cursor="pointer";
    }
    let mysubmit=createIMG(`../../img/submit.png`,1451,849,`cont${num}`,`submit${num}`);
    mysubmit.onclick=submitBtn.bind(this,num);
    mysubmit.style.cursor="pointer";

    let myright=createIMG(`img/right${num}.png`,-6,300,`cont${num}`,`right${num}`);
    myright.style.display="none";

    // createIMG(`../../img/tryAgainBg.png`,-6,300,`cont${num}`,`tryAgainBg${num}`).style.display="none";
    createIMG(`./img/wrong${num}.png`,-6,300,`cont${num}`,`tryAgainBg${num}`).style.display="none";

    let continue1= createIMG(`../../img/continue.png`,1451,850,`cont${num}`,`continueBtn${num}`);
    continue1.style.display="none";
    continue1.style.cursor="pointer";
    continue1.onclick=continueBtn;
    
    let againBtn=createIMG(`../../img/tryAgain.png`,1348,850,`cont${num}`,`againBtn${num}`);
    againBtn.style.display="none";
    againBtn.style.cursor="pointer";
    againBtn.onclick=againBtnF;

    function continueBtn(){
        if(isend){
        setTimeout(function () {
            $("#cont0").remove();
            $(`#cont${num}`).remove();
        }, 100);
        readSomeThing('');
        myVideo2();
        }else{
        console.log("continueBtn");
        $(`#cont${num}`).remove();
        setTimeout(function () {
            readSomeThing(`audio/topic${num+1}.mp3`);
        }, 1000);

        $(`#cont${num+1}`).fadeIn(1500);

        setTimeout(function () {
            $(`#cheek${num+1}`).fadeIn(3000);
        }, 600);

        }

        nowLoPage(num+1);
    }

    function againBtnF(){
        $(`#tryAgainBg${num}`).hide();
        $(`#againBtn${num}`).hide();
        $(`#submit${num}`).show();
        readSomeThing('');
        

        for(let i=1;i<=questionNum;i++){
            $(`#q${num}choose${i}`).attr('src', `img/q${num}choose${i}_1.png`);
            document.querySelector(`#q${num}choose${i}`).style.pointerEvents = 'auto';
        }

    }

    function chooseBtn(tNum){
        console.log("chooseBtn");
        console.log(tNum);
        console.log(rNum);
        flag=true;
        ucnum=tNum;
        if(tNum==rNum){
            j=1;
        }
        else{
            j=0;
        }
    for(let i=1;i<=questionNum;i++){
        if(i==tNum){
            $(`#q${num}choose${i}`).attr('src', `img/q${num}choose${i}_2.png`);
        }else{
            $(`#q${num}choose${i}`).attr('src', `img/q${num}choose${i}_1.png`);
        }
        
    }
    }

    function submitBtn(num){
        if (flag) {
            for(let i=1;i<=questionNum;i++){
            document.querySelector(`#q${num}choose${i}`).style.pointerEvents = 'none';
        }

        if (j == 1) {
            $(`#continueBtn${num}`).show();
            $(`#right${num}`).show();
            $(`#submit${num}`).hide();
            readSomeThing('../../audio/Correct.mp3');
            console.log(j);
            j = 0;
        } else {

            if(questionNum==2){
                $(`#tryAgainBg${num}`).show();
                $(`#continueBtn${num}`).show();
                readSomeThing('../../audio/InCorrect.mp3');
            }else{
                if(wrongF>1){
                $(`#tryAgainBg${num}`).attr("src",`./img/wrong${num}_${ucnum}.png`);
                }
                $(`#againBtn${num}`).show();
                setTimeout(function(){$(`#tryAgainBg${num}`).show();},0);
                readSomeThing('../../audio/again.mp3');
            }
            // $(`#submit${num}`).hide();
            // $(`#againBtn${num}`).show();
            // setTimeout(function(){$(`#tryAgainBg${num}`).show();},0)
            // $(`#submit${num}`).hide();
            // readSomeThing('../../audio/again.mp3');
        }
    }
    flag = false;
    console.log(flag)
    console.log(j)
    }

}

function createTFcont(num,cheekX,cheekY,questionX,questionY,questionNum,optionX,optionYARR,rNum,isend){

    let content=document.getElementById("content");
    let cont=document.createElement("div");
    content.appendChild(cont);
    cont.id=`cont${num}`;
    console.log("now create")
    cont.style.display="none";
    cont.style.position="absolute";

    createIMG(`img/cheek${num}.png`,cheekX,cheekY,`cont${num}`,`cheek${num}`);
    createIMG(`img/question1.png`,questionX,questionY,`cont${num}`,`cheek${num}`);

    let mysubmit=createIMG(`../../img/submit.png`,1451,849,`cont${num}`,`submit${num}`);
    mysubmit.onclick=submitBtn.bind(this,num);
    mysubmit.style.cursor="pointer";

    let continue1= createIMG(`../../img/continue.png`,1451,850,`cont${num}`,`continueBtn${num}`);
    continue1.style.display="none";
    continue1.style.cursor="pointer";
    continue1.onclick=continueBtn;



    createIMG(`img/right1_1.png`,optionX,optionYARR[0],`cont${num}`,`q${num}choose1`).onclick=chooseBtn.bind(this,1);
    createIMG(`img/wrong1_1.png`,optionX,optionYARR[1],`cont${num}`,`q${num}choose2`).onclick=chooseBtn.bind(this,2);

    createIMG(`./img/wrong${num}.png`,-6,334,`cont${num}`,`wrong${num}`).style.display="none";
    let myright=createIMG(`img/right${num}.png`,-6,334,`cont${num}`,`right${num}`);
    myright.style.display="none";

    for(let i=1;i<=questionNum;i++){
        document.getElementById(`q${num}choose${i}`).style.cursor="pointer";
    }

    function continueBtn(){
        if(isend){
        setTimeout(function () {
            $("#cont0").remove();
            $(`#cont${num}`).remove();
        }, 200);
        readSomeThing('');
        if("当所有章节完成时"){
            $('#complete').show();
            readSomeThing('../../audio/complete.mp3');
            myAudio.onended = function(){
                readSomeThing('');
                setMyCompleted(false);   
            }
        }else if("存在章节未完成"){
            $('#InComplete').show();
            readSomeThing('xxx');//未找到失败的VO
            myAudio.onended = function(){
                readSomeThing('');
                setMyCompleted(false);   
            }
        }

        }
        else{
        console.log("continueBtn");
        $(`#cont${num}`).remove();
        setTimeout(function () {
            readSomeThing(`audio/topic${num+1}.mp3`);
        }, 1000);

        $(`#cont${num+1}`).fadeIn(1500);

        setTimeout(function () {
            $(`#question${num+1}`).fadeIn(3000);
        }, 600);

        }

        nowLoPage(num+1);
    }

    function chooseBtn(tNum){
        console.log("chooseBtn");
        console.log(tNum);
        console.log(rNum);
        flag=true;
        if(tNum==rNum){
            j=1;
        }else{
             j=0;
        }

        if(tNum==1){
            $(`#q${num}choose1`).attr('src', `img/right1_2.png`);
            $(`#q${num}choose2`).attr('src', `img/wrong1_1.png`);
        }else if(tNum==2){
            $(`#q${num}choose2`).attr('src', `img/wrong1_2.png`);
            $(`#q${num}choose1`).attr('src', `img/right1_1.png`);
        }
        
    }

    function submitBtn(num){
        if (flag) {
            for(let i=1;i<=questionNum;i++){
            document.querySelector(`#q${num}choose${i}`).style.pointerEvents = 'none';
        }

        if (j == 1) {
            $(`#continueBtn${num}`).show();
            $(`#right${num}`).show();
            $(`#submit${num}`).hide();
            readSomeThing('../../audio/Correct.mp3');
            console.log(j);
            j = 0;
        } else {
            $(`#continueBtn${num}`).show();
            $(`#wrong${num}`).show();
            $(`#submit${num}`).hide();
            readSomeThing('./audio/incorrect.mp3');
        }
    }
    flag = false;
    console.log(flag)
    console.log(j)
    }
}
