import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const VPCT_KEY = "videoplayer-current-time";
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const onPlay = function (event) {
    localStorage.setItem(VPCT_KEY, event.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));
const setTime = localStorage.getItem(VPCT_KEY);
player.setCurrentTime(setTime || 0);