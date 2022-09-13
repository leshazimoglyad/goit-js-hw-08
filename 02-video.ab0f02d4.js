const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",throttle((function({seconds:e}){localStorage.setItem("videoplayer-current-time",e)}),1e3)),t.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
//# sourceMappingURL=02-video.ab0f02d4.js.map
