// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.querySelector("#masterPlay");
let myProgressBar = document.querySelector("#myProgressBar");
let gif = document.querySelector("#gif");
let songItems = document.querySelectorAll(".songItem");
let masterSongName = document.querySelector("#masterSongName");
let songs = [
  {
    songName: "Adele - Someone Like You",
    filePath: "Songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Adhuro Prem - Axix Band",
    filePath: "Songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Albatross - Timi Bhane",
    filePath: "Songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Anne-Marie - 2002 [Official Video]",
    filePath: "Songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "BHANAI - Tribal Rain",
    filePath: "Songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Birsiney Hau Ki - The ElementsTuborg Open Sessions",
    filePath: "Songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Calum Scott - You Are The Reason (Official)",
    filePath: "Songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Jau ki Basu by Sabin Rai (New Song)",
    filePath: "Songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Khaseka Tara (Lyrics On Screen)",
    filePath: "Songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "PassengerLet Her Go (Official Video)",
    filePath: "Songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((el, i) => {
  el.querySelectorAll("img")[0].src = songs[i].coverPath;
  el.querySelectorAll("span")[0].innerText = songs[i].songName;
});
// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //   Update Seeker
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  document.querySelectorAll(".songItemPlay").forEach((el) => {
    el.classList.remove("fa-circle-pause");
    el.classList.add("fa-circle-play");
  });
};
document.querySelectorAll(".songItemPlay").forEach((el) => {
  el.addEventListener("click", (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.src = `./songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  });
});
document.querySelector("#next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `./songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  gif.style.opacity = 1;
});
document.querySelector("#previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `./songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  gif.style.opacity = 1;
});
