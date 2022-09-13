!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",throttle((function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",t)}),1e3)),t.setCurrentTime(localStorage.getItem("videoplayer-current-time"))}();
//# sourceMappingURL=02-video.2eb4f3e3.js.map
