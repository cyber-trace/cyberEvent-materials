let isPlaying = false;

const player = document.getElementById("player");
const playBtn = document.getElementById("play_btn");
const music_list_container = document.getElementById("music_list_1");
const audio = document.getElementById("audio_player");
const song_name = document.getElementById("song_name");
const artist_name = document.getElementById("artist_name");
const cover = document.getElementById("small_cover");
const progress = document.getElementById("inner_bar");

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

audio.addEventListener("timeupdate", updateProgress);

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

const main = async () => {
  const { allSong } = await get_songs();

  allSong.slice(0, 4).forEach((song) => {
    //   adding image
    const song_card = document.createElement("div");
    song_card.classList.add("song-card");

    const song_album_img = document.createElement("div");
    song_album_img.classList.add("song-album_img");

    const song_album_img_src = document.createElement("img");
    song_album_img_src.setAttribute("src", `${BASE_URL}\\${song.cover}`);
    song_album_img.appendChild(song_album_img_src);
    song_card.appendChild(song_album_img);

    //   adding test
    const song_title = document.createElement("h1");
    song_title.innerText = song.title;
    const artist_name = document.createElement("h2");
    artist_name.innerText = song.artist.name;

    song_card.appendChild(song_title);
    song_card.appendChild(artist_name);

    song_card.addEventListener("click", () => {
      player_song = song;
      load_song(song);
      playSong();
    });

    music_list_container.appendChild(song_card);
  });
};

main();
