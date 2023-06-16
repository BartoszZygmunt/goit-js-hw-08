import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  //   id: 236203659,
  //   width: 640,
});

var callback = function () {};
player.off('play', callback);

player.on('play', function () {
  console.log('played the video!');
});

player.on('loaded', () => {
  console.log('loaded ...');
  if (localStorage.getItem('videoplayer-current-time') !== null) {
    player
      .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
      .then(function (seconds) {
        // seconds = the actual time that the player seeked to
      })
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

          default:
            // some other error occurred
            break;
        }
      });
    player.play();
  }
});

player.on('timeupdate', () => {
  player
    .getCurrentTime()
    .then(function (seconds) {
      console.log(seconds);
      localStorage.setItem('videoplayer-current-time', seconds);
      // seconds = the current playback position
    })
    .catch(function (error) {
      console.log(error);
    });
});
