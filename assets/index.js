import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [
  //new AutoPlay()
]});

const playButton = document.querySelector("#play-button");
playButton.onclick = () => player.togglePlay();

const unmutedButton = document.querySelector("#unmute-button");
unmutedButton.onclick = () => player.unmute();