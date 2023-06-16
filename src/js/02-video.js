import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {});

const timeStorage = localStorage.getItem('videoplayer-current-time');
if (timeStorage !== null) {
  player.setCurrentTime(timeStorage);
}

const setTimeToStorage = () => {
  player
    .getCurrentTime()
    .then(function (seconds) {
      //console.log(seconds);
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
};

player.on('timeupdate', throttle(setTimeToStorage, 1000));
