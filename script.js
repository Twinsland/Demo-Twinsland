const musics = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
const audio = new Audio(`assets/musics/${musics[Math.floor(Math.random() * musics.length)]}`);
audio.play();