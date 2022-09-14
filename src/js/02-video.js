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

// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on('timeupdate', throttle(onPlay, 1000));

// function onPlay({ seconds }) {
//   localStorage.setItem('videoplayer-current-time', seconds);
// }

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time')||0);


// jQuery('videoplayer-current-time').each(function(){
//     const seconds = jQuery(this).attr('src');
//     if(seconds==prev_url || prev_url==null) {
//     localStorage.setItem('videoplayer-current-time', seconds);
//     let time = localStorage.getItem('videoplayer-current-time');
//     player.setCurrentTime(time);
//     }
//     });
//     myPlayer.setCurrentTime(localStorage.getItem(PLAYER_STORAGE_KEY) || 0);
import Player from '@vimeo/player';const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');   const myPlayer = new Player(iframe);
const PLAYER_STORAGE_KEY = 'videoplayer-current-time'; 

myPlayer.on(  'timeupdate',  throttle(function () {    
myPlayer.getCurrentTime().then(function (seconds) {      
localStorage.setItem(PLAYER_STORAGE_KEY, seconds);    });  }, 1000));
myPlayer.setCurrentTime(localStorage.getItem(PLAYER_STORAGE_KEY) || 0);