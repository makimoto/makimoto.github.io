navigator.getMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

$(document).ready(function() {
  navigator.getMedia(
    { video: true },
    function(localMediaStream) {
      var video = document.getElementById("video");
      video.src = window.URL.createObjectURL(localMediaStream);
      video.onloadedmetadata = function(e) {
        console(e);
      };
    },
    function(err) {
      console(err)
    }
  )
});
