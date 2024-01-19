const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const checkbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
  audio = new Audio("public/tunes/a.wav");

const playTune = (key) => {
  audio.src = `public/tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const hideShowLetters = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) {
    playTune(e.key);
  }
};

checkbox.addEventListener("click", hideShowLetters);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
