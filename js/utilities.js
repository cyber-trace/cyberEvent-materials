const BASE_URL = "http://192.168.1.14:5000";

const get_songs = async () => {
  let data = await fetch(BASE_URL + "/api/v1/song");
  data = await data.json();
  return data;
};

function pauseSong() {
  isPlaying = false;
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

function playSong() {
  isPlaying = true;
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

const load_song = (song) => {
  song_name.innerText = song.title;
  artist_name.innerText = song.artist.name;
  audio.src = `${BASE_URL}\\${song.path}`;
  cover.src = `${BASE_URL}\\${song.cover}`;
};
