// import '../css/common.css';
// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';
// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// const TIME_KEY = 'videoplayer-current-time';

// const onPlay = function (data){
//     const stringifyData = JSON.stringify(data);
//     localStorage.setItem(TIME_KEY,stringifyData);

// };
// player.on('timeupdate', throttle(onPlay,1000));

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const TIME_KEY = 'videoplayer-current-time';
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ data }) {
    const stringifyData = JSON.stringify(data);
  localStorage.setItem(TIME_KEY, stringifyData);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

