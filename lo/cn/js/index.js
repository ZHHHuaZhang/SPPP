"use strict";

//getAllSubStatus();
function getID(id) {
  return document.getElementById(id);
} //设置s位


function timeUp(arr, num) {
  var timeNum = num;
  var timeFlag = 0;
  var timeBo = true;
  getID('videoMP4').addEventListener("timeupdate", timePoint, false);
  getID('videoMP4').addEventListener("seeked", timeSeek, false);

  function timePoint() {
    var curT = this.currentTime; //num++;
    // console.log(curT)

    if (curT > arr[timeFlag]) {
      timeBo = true;
    }

    for (var i = 0; i < arr.length; i++) {
      if (curT > arr[i] && curT < arr[i + 1] && i < arr.length - 1 && timeBo == true) {
        $('#play').hide();
        timeFlag = i + 1;
        nowLoPage(num + i);
        timeBo = false; //console.log(num + i);

        break;
      } else if (curT > arr[i] && i == arr.length - 1 && timeBo == true) {
        nowLoPage(num + i);
        timeBo = false;
        timeFlag = i + 1; //console.log(num + i);

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
} //frank
//创建热区


function createIMG(src, x, y) {
  var insertspace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "content";
  var id = arguments.length > 4 ? arguments[4] : undefined;
  var name = document.createElement("img");
  name.src = "".concat(src);
  name.style.left = "".concat(x, "px");
  name.style.top = "".concat(y, "px");
  name.id = "".concat(id);
  console.log("".concat(name));
  document.getElementById("".concat(insertspace)).appendChild(name);
  return name;
}

function createHotsport(width, height, x, y, id, insertspace) {
  var hotsport = document.createElement("div");
  console.log(hotsport);
  hotsport.id = id;
  hotsport.style.width = "".concat(width, "px");
  hotsport.style.height = "".concat(height, "px");
  hotsport.style.left = "".concat(x, "px");
  hotsport.style.top = "".concat(y, "px");
  hotsport.style.cursor = "pointer";
  hotsport.style.position = "absolute";
  document.getElementById("".concat(insertspace)).appendChild(hotsport);
  return hotsport; // console.log("create hotsport");
} //多项选择题 导出选项id q${num}choose${i} 类推 q1choose1 多项错误反馈wrong${num}_${ucnum}


function createCont(num) {
  var cheekX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 995;
  var cheekY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 445;
  var questionX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 82;
  var questionY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 191;
  var questionNum = arguments.length > 5 ? arguments[5] : undefined;
  var optionX = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 91;
  var optionYARR = arguments.length > 7 ? arguments[7] : undefined;
  var rNum = arguments.length > 8 ? arguments[8] : undefined;
  var isend = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;
  var wrongF = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
  var ucnum = 0;
  var content = document.getElementById("content");
  console.log(content);
  var cont = document.createElement("div");
  content.appendChild(cont);
  cont.id = "cont".concat(num);
  console.log("now create");
  cont.style.display = "none";
  cont.style.position = "absolute";
  createIMG("img/cheek".concat(num, ".png"), cheekX, cheekY, "cont".concat(num), "cheek".concat(num));
  createIMG("img/question".concat(num, ".png"), questionX, questionY, "cont".concat(num), "cheek".concat(num));

  for (var i = 1; i <= questionNum; i++) {
    createIMG("img/q".concat(num, "choose").concat(i, "_1.png"), optionX, optionYARR[i - 1], "cont".concat(num), "q".concat(num, "choose").concat(i)).onclick = chooseBtn.bind(this, i);
  }

  for (var _i = 1; _i <= questionNum; _i++) {
    document.getElementById("q".concat(num, "choose").concat(_i)).style.cursor = "pointer";
  }

  var mysubmit = createIMG("../../img/submit.png", 1451, 849, "cont".concat(num), "submit".concat(num));
  mysubmit.onclick = submitBtn.bind(this, num);
  mysubmit.style.cursor = "pointer";
  var myright = createIMG("img/right".concat(num, ".png"), -6, 300, "cont".concat(num), "right".concat(num));
  myright.style.display = "none"; // createIMG(`../../img/tryAgainBg.png`,-6,300,`cont${num}`,`tryAgainBg${num}`).style.display="none";

  createIMG("./img/wrong".concat(num, ".png"), -6, 300, "cont".concat(num), "tryAgainBg".concat(num)).style.display = "none";
  var continue1 = createIMG("../../img/continue.png", 1451, 850, "cont".concat(num), "continueBtn".concat(num));
  continue1.style.display = "none";
  continue1.style.cursor = "pointer";
  continue1.onclick = continueBtn;
  var againBtn = createIMG("../../img/tryAgain.png", 1348, 850, "cont".concat(num), "againBtn".concat(num));
  againBtn.style.display = "none";
  againBtn.style.cursor = "pointer";
  againBtn.onclick = againBtnF;

  function continueBtn() {
    if (isend) {
      setTimeout(function () {
        $("#cont0").remove();
        $("#cont".concat(num)).remove();
      }, 100);
      readSomeThing('');
      myVideo2();
    } else {
      console.log("continueBtn");
      $("#cont".concat(num)).remove();
      setTimeout(function () {
        readSomeThing("audio/topic".concat(num + 1, ".mp3"));
      }, 1000);
      $("#cont".concat(num + 1)).fadeIn(1500);
      setTimeout(function () {
        $("#cheek".concat(num + 1)).fadeIn(3000);
      }, 600);
    }

    nowLoPage(num + 1);
  }

  function againBtnF() {
    $("#tryAgainBg".concat(num)).hide();
    $("#againBtn".concat(num)).hide();
    $("#submit".concat(num)).show();
    readSomeThing('');

    for (var _i2 = 1; _i2 <= questionNum; _i2++) {
      $("#q".concat(num, "choose").concat(_i2)).attr('src', "img/q".concat(num, "choose").concat(_i2, "_1.png"));
      document.querySelector("#q".concat(num, "choose").concat(_i2)).style.pointerEvents = 'auto';
    }
  }

  function chooseBtn(tNum) {
    console.log("chooseBtn");
    console.log(tNum);
    console.log(rNum);
    flag = true;
    ucnum = tNum;

    if (tNum == rNum) {
      j = 1;
    } else {
      j = 0;
    }

    for (var _i3 = 1; _i3 <= questionNum; _i3++) {
      if (_i3 == tNum) {
        $("#q".concat(num, "choose").concat(_i3)).attr('src', "img/q".concat(num, "choose").concat(_i3, "_2.png"));
      } else {
        $("#q".concat(num, "choose").concat(_i3)).attr('src', "img/q".concat(num, "choose").concat(_i3, "_1.png"));
      }
    }
  }

  function submitBtn(num) {
    if (flag) {
      for (var _i4 = 1; _i4 <= questionNum; _i4++) {
        document.querySelector("#q".concat(num, "choose").concat(_i4)).style.pointerEvents = 'none';
      }

      if (j == 1) {
        $("#continueBtn".concat(num)).show();
        $("#right".concat(num)).show();
        $("#submit".concat(num)).hide();
        readSomeThing('../../audio/Correct.mp3');
        console.log(j);
        j = 0;
      } else {
        if (questionNum == 2) {
          $("#tryAgainBg".concat(num)).show();
          $("#continueBtn".concat(num)).show();
          readSomeThing('../../audio/InCorrect.mp3');
        } else {
          if (wrongF > 1) {
            $("#tryAgainBg".concat(num)).attr("src", "./img/wrong".concat(num, "_").concat(ucnum, ".png"));
          }

          $("#againBtn".concat(num)).show();
          setTimeout(function () {
            $("#tryAgainBg".concat(num)).show();
          }, 0);
          readSomeThing('../../audio/again.mp3');
        } // $(`#submit${num}`).hide();
        // $(`#againBtn${num}`).show();
        // setTimeout(function(){$(`#tryAgainBg${num}`).show();},0)
        // $(`#submit${num}`).hide();
        // readSomeThing('../../audio/again.mp3');

      }
    }

    flag = false;
    console.log(flag);
    console.log(j);
  }
}

function createTFcont(num, cheekX, cheekY, questionX, questionY, questionNum, optionX, optionYARR, rNum, isend) {
  var content = document.getElementById("content");
  var cont = document.createElement("div");
  content.appendChild(cont);
  cont.id = "cont".concat(num);
  console.log("now create");
  cont.style.display = "none";
  cont.style.position = "absolute";
  createIMG("img/cheek".concat(num, ".png"), cheekX, cheekY, "cont".concat(num), "cheek".concat(num));
  createIMG("img/question1.png", questionX, questionY, "cont".concat(num), "cheek".concat(num));
  var mysubmit = createIMG("../../img/submit.png", 1451, 849, "cont".concat(num), "submit".concat(num));
  mysubmit.onclick = submitBtn.bind(this, num);
  mysubmit.style.cursor = "pointer";
  var continue1 = createIMG("../../img/continue.png", 1451, 850, "cont".concat(num), "continueBtn".concat(num));
  continue1.style.display = "none";
  continue1.style.cursor = "pointer";
  continue1.onclick = continueBtn;
  createIMG("img/right1_1.png", optionX, optionYARR[0], "cont".concat(num), "q".concat(num, "choose1")).onclick = chooseBtn.bind(this, 1);
  createIMG("img/wrong1_1.png", optionX, optionYARR[1], "cont".concat(num), "q".concat(num, "choose2")).onclick = chooseBtn.bind(this, 2);
  createIMG("./img/wrong".concat(num, ".png"), -6, 334, "cont".concat(num), "wrong".concat(num)).style.display = "none";
  var myright = createIMG("img/right".concat(num, ".png"), -6, 334, "cont".concat(num), "right".concat(num));
  myright.style.display = "none";

  for (var i = 1; i <= questionNum; i++) {
    document.getElementById("q".concat(num, "choose").concat(i)).style.cursor = "pointer";
  }

  function continueBtn() {
    if (isend) {
      setTimeout(function () {
        $("#cont0").remove();
        $("#cont".concat(num)).remove();
      }, 200);
      readSomeThing('');

      if ("当所有章节完成时") {
        $('#complete').show();
        readSomeThing('../../audio/complete.mp3');

        myAudio.onended = function () {
          readSomeThing('');
          setMyCompleted(false);
        };
      } else if ("存在章节未完成") {
        $('#InComplete').show();
        readSomeThing('xxx'); //未找到失败的VO

        myAudio.onended = function () {
          readSomeThing('');
          setMyCompleted(false);
        };
      }
    } else {
      console.log("continueBtn");
      $("#cont".concat(num)).remove();
      setTimeout(function () {
        readSomeThing("audio/topic".concat(num + 1, ".mp3"));
      }, 1000);
      $("#cont".concat(num + 1)).fadeIn(1500);
      setTimeout(function () {
        $("#question".concat(num + 1)).fadeIn(3000);
      }, 600);
    }

    nowLoPage(num + 1);
  }

  function chooseBtn(tNum) {
    console.log("chooseBtn");
    console.log(tNum);
    console.log(rNum);
    flag = true;

    if (tNum == rNum) {
      j = 1;
    } else {
      j = 0;
    }

    if (tNum == 1) {
      $("#q".concat(num, "choose1")).attr('src', "img/right1_2.png");
      $("#q".concat(num, "choose2")).attr('src', "img/wrong1_1.png");
    } else if (tNum == 2) {
      $("#q".concat(num, "choose2")).attr('src', "img/wrong1_2.png");
      $("#q".concat(num, "choose1")).attr('src', "img/right1_1.png");
    }
  }

  function submitBtn(num) {
    if (flag) {
      for (var _i5 = 1; _i5 <= questionNum; _i5++) {
        document.querySelector("#q".concat(num, "choose").concat(_i5)).style.pointerEvents = 'none';
      }

      if (j == 1) {
        $("#continueBtn".concat(num)).show();
        $("#right".concat(num)).show();
        $("#submit".concat(num)).hide();
        readSomeThing('../../audio/Correct.mp3');
        console.log(j);
        j = 0;
      } else {
        $("#continueBtn".concat(num)).show();
        $("#wrong".concat(num)).show();
        $("#submit".concat(num)).hide();
        readSomeThing('./audio/incorrect.mp3');
      }
    }

    flag = false;
    console.log(flag);
    console.log(j);
  }
}