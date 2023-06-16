import Player from '@vimeo/player';

const player = new Player('vimeo-player', {});

//usuń nasłuchiwanie przy stop
player.on('pause', () => {
  player.off('timeupdate');
});

const timeStorage = localStorage.getItem('videoplayer-current-time');
if (timeStorage !== null) {
  player.setCurrentTime(timeStorage);
}

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
