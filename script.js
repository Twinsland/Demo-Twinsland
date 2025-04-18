
let musics = [
    "assets/musics/song1.mp3",
    "assets/musics/song2.mp3",
    "assets/musics/song3.mp3"
];
let currentTrack = 0;
let audio = new Audio(musics[currentTrack]);

function toggleMusic() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextTrack() {
    audio.pause();
    currentTrack = (currentTrack + 1) % musics.length;
    audio = new Audio(musics[currentTrack]);
    audio.play();
}
