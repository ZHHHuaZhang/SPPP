
function testVideo(content, videoid, videosrc, isTest) {
  if (document.getElementById('viodeContent')) {
    console.log('Video content is in');
  } else {
    $("#".concat(content)).append($('<div></div>').attr("id", "viodeContent").css({
      display: 'none',
    }));
  }

  $('#viodeContent').append($('<video autoplay controls x5-playsinline=" " width="1680px" height="1050px" playsinline=" " webkitPlaysinline=" "; ></video>').attr("id", "".concat(videoid)).attr('src', "".concat(videosrc)).css({zIndex:1}));
  videoid = document.querySelector("#".concat(videoid));
  videoid.controls = isTest;

}
