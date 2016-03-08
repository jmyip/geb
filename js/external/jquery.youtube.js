jQuery(function($) {

  $('#module-video').YTPlayer({
    fitToBackground: false,
    videoId: 'jKCyFB5LmPo',
    pauseOnScroll: false,
    playerVars: {
      modestbranding: 0,
      autoplay: 1,
      controls: 1,
      showinfo: 0,
      branding: 0,
      rel: 0,
      autohide: 0
    }
  });

  $('#background-video').YTPlayer({
    fitToBackground: false,
    videoId: 'Fk9EBOOAYiU',
    pauseOnScroll: true,
    callback: function() {
      videoCallbackEvents();
    }
  });

  var videoCallbackEvents = function() {
    var player = $('#background-video').data('ytPlayer').player;

    player.addEventListener('onStateChange', function(event){
        console.log("Player State Change", event);

        // OnStateChange Data
        if (event.data === 0) {
            console.log('video ended');
        }
        else if (event.data === 2) {
          console.log('paused');
        }
    });
  }
});