import '../css/common.css';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

const onPlay = function (data){
    const stringifyData = JSON.stringify(data);
    localStorage.setItem(TIME_KEY,stringifyData);

};
player.on('timeupdate', throttle(onPlay,1000));



