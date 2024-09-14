var rightAns3 = new Array(1, 1, 1);//记录完成状态
var YourAns3 = new Array(0, 0, 0);
var dragAns3 = new Array(0, 0, 0);//记录正确答案
var rightAns9 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1);
var YourAns9 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
var clickBlo = false;
var timeNum = -1;

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
}
    var start = IsPC() ? "mousedown" : "touchstart";
    var move = IsPC() ? "mousemove" : "touchmove";
    var end = IsPC() ? "mouseup" : "touchend";
function Drag9(obj, arrS, arrN) {
    this.arrN = arrN;
    this.arrS = arrS;
    var index, startPos, startH, startW, disX, disY;
    var topA = 0;
    var leftA = 0;
    
    this.dragFun = function() {
        obj.on(start, myStart = function(e) {
            var ev = e.type == 'touchstart' ? e.originalEvent.touches[0] : e;
            index = obj.index($(this));
            startH = obj.eq(index).outerHeight();
            startW = obj.eq(index).outerWidth();
            startPos = $(this).position();
            disX = ev.pageX - startPos.left;
            disY = ev.pageY - startPos.top;
            $(document).on(move, myMove);
            $(document).on(end, myEnd);
            obj.eq(index).css({
                '-webkit-transform': 'scale(1)',
                'transform': 'scale(1)'
            });
            return false;
        });
    }
    this.dragEnd = function() {
        obj.off(start, myStart);
    }
    this.reStart = function() {
        for (var i = 0; i < obj.length; i++) {
            dragPos(i);
            $('.sel3').eq(i).attr('src', 'images/e' + index + '.png');
            obj.show();
        }
        for (var i = 0; i < arrS.length; i++) {
            arrS[i] = 0;
        }
        obj.on(start, myStart);
    }
    setInterval(function() {
        if (clickBlo == true) {
            $(document).off(end, myEnd);
            $(document).off(move, myMove);
            prePos3(obj, index)
        }
    }, 100);


    function myMove(e) {
        var ev = e.type == 'touchmove' ? e.originalEvent.touches[0] : e;
        leftA = (ev.pageX - disX);
        topA = (ev.pageY - disY);
        obj.eq(index).css('z-index', 1);
        if (leftA < 0) {
            leftA = 0;
        }
        if (topA < 0) {
            topA = 0;
        }
        dixW = 1680 - startW;
        dixH = 1050 - startH;
        if (topA > dixH) {
            topA = dixH;
        }
        if (leftA > dixW) {
            leftA = dixW;
        }
        obj.eq(index).css('left', leftA);
        obj.eq(index).css('top', topA);
    }

    function myEnd(e) {
        var ev = e.type == 'touchend' ? e.originalEvent.changedTouches[0] : e;
        obj.eq(index).css('z-index', 0);
        if (impact(obj.eq(index), $('#answerbox1'))) {
            readSomeThing('');
            obj.eq(index).css("display", "none");
            $('#answerbox1').css("opacity", "0");
            //console.log("index="+index);
            if (index == 0 || index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8) {
                timeNum++;
                if (timeNum == 0) {
                    $(".drag2").eq(index).css({
                        top: 362.30,
                        left: 82.10
                    }).show();
                    YourAns9[index] = 1;
                    AnsCheck();
                }
                else if (timeNum == 1) {
                    obj.eq(index).css("display", "none")
                    $(".drag2").eq(index).css({
                        top: 362.30,
                        left: 326.25
                    }).show();
                    YourAns9[index] = 1;
                    dragAns3[0] = 1;
                    AnsCheck();
                }
                else if (timeNum == 2) {
                    obj.eq(index).css("display", "none")
                    $(".drag2").eq(index).css({
                        top: 362.30,
                        left: 567.80
                    }).show();
                    YourAns9[index] = 1;
                    AnsCheck();
                }
                else if (timeNum == 3) {
                    obj.eq(index).css("display", "none")
                    $(".drag2").eq(index).css({
                        top: 544.85,
                        left: 82.10
                    }).show();
                    YourAns9[index] = 1;
                    AnsCheck();
                }
                else if (timeNum == 4) {
                    obj.eq(index).css("display", "none")
                    $(".drag2").eq(index).css({
                        top: 544.85,
                        left: 326.25
                    }).show();
                    YourAns9[index] = 1;
                    AnsCheck();
                }
                else if (timeNum == 5) {
                    obj.eq(index).css("display", "none")
                    $(".drag2").eq(index).css({
                        top: 544.85,
                        left: 567.80
                    }).show();
                    YourAns9[index] = 1;
                    AnsCheck();
                }
                else if (timeNum == 6) {
                    obj.eq(index).css("display", "none")
                    $(".drag2").eq(index).css({
                        top: 726.55,
                        left: 82.10
                    }).show();
                    YourAns9[index] = 1;
                    AnsCheck();
                }
                else if (timeNum == 7) {
                    obj.eq(index).css("display", "none")
                    $(".drag2").eq(index).css({
                        top: 726.55,
                        left: 326.25
                    }).show();
                    YourAns9[index] = 1;
                    AnsCheck();
                }
                else if (timeNum == 8) {
                    obj.eq(index).css("display", "none")
                    $(".drag2").eq(index).css({
                        top: 726.55,
                        left: 567.80
                    }).show();
                    YourAns9[index] = 1;
                    AnsCheck();
                }
                else {
                    prePos9(obj, index);
                }
            }
        }else {
            prePos9(obj, index);
        }
        $(document).off(end, myEnd);
        $(document).off(move, myMove);
    }

    function AnsCheck() {
        console.log("YourAns9:"+YourAns9.toString())
        //submitBtn2();
       
    }
}
function prePos9(obj, num) {
    switch (num) {
        case 0:
            obj.eq(num).css({ left: '884.10px', top: '358.30px', display: "block" });
            break;
        case 1:
            obj.eq(num).css({ left: '1128.25px', top: '358.30px', display: "block" });
            break;
        case 2:
            obj.eq(num).css({ left: '1369.80px', top: '358.30px', display: "block" });
            break;
        case 3:
            obj.eq(num).css({ left: '884.10px', top: '540.85px', display: "block" });
            break;
        case 4:
            obj.eq(num).css({ left: '1128.25px', top: '540.85px', display: "block" });
            break;
        case 5:
            obj.eq(num).css({ left: '1369.80px', top: '540.85px', display: "block" });
            break;
        case 6:
            obj.eq(num).css({ left: '884.10px', top: '722.55px', display: "block" });
            break;
        case 7:
            obj.eq(num).css({ left: '1128.25px', top: '722.55px', display: "block" });
            break;
        case 8:
            obj.eq(num).css({ left: '1369.805px', top: '722.55px', display: "block" });
            break;
    }
}
//检测两个对象是否碰撞
function impact(obj, dobj, boole) {
    var o = {
        x: parseInt(obj.css('left')),
        y: parseInt(obj.css('top')),
        w: parseInt(obj.css('width')),
        h: parseInt(obj.css('height'))
    }

    var d = {
        x: parseInt(dobj.css('left')),
        y: parseInt(dobj.css('top')),
        w: parseInt(dobj.css('width')),
        h: parseInt(dobj.css('height'))
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