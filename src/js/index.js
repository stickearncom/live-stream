$(document).ready(function () {
  var $frame = $('#yt-livestream')
  $frame.on('load', function () {
    console.log('object', $frame[0].contentWindow.document);
  })

  var $frameTest = $('#yt-test')
  $frameTest.on('load', function () {
    console.log('object', $frameTest[0].contentWindow.document);
  })
  
});
