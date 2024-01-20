const canvas1 = document.getElementById("canvas1");
const canvas2 = document.getElementById("canvas2");
const canvas3 = document.getElementById("canvas3");

const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const ctx3 = canvas3.getContext("2d");

const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const body = document.querySelector("body");
const checkbox = document.querySelector(".keys-checkbox input");
const waves = document.querySelector(".footer");
const canvas = document.querySelector(".canvaswrap");
const header = document.querySelector(".wrapper__header-title");

const capybara = document.querySelector(".capybara");
const sadCapy = document.querySelector(".sadCapy");
const kraken = document.querySelector(".kraken");
const jacksparrow = document.querySelector(".jack-sparrow");
const sans = document.querySelector(".sans-undertale");
const rickMorty = document.querySelector(".rickMorty");
const rickMortyAwayImage = document.querySelector(".rickMortyAwayImage");
const toothless = document.querySelector(".toothless");
const dancers = document.querySelector(".dancingImages");
const rickAstley = document.querySelector(".rickAstley");

const fireworks = document.querySelector(".firework-wrapper");
const sun = document.querySelector(".content");
const clouds = document.querySelector(".clouds");
const portal = document.querySelector(".rm-container");
const laser = document.querySelector(".laser-wrapper");
const jebaited = document.querySelector(".jebaited-title");
const endtext = document.querySelector(".endtext-wrapper");
const endScreen = document.querySelector(".background-container");
const confetti = document.querySelector(".confetti");

// PIANO CODE

let allKeys = [],
  audio = new Audio("public/pianoTunes/a.wav");

let isLightningActive = false;
let isRainActive = false;
let lettersShowing = true;

const playTune = (key) => {
  let tuneToPlay;

  if (!lettersShowing) {
    tuneToPlay = `public/pianoTunes/${key}.wav`;
  } else {
    tuneToPlay = `public/tunes/${key}.mp3`;
  }

  audio.src = tuneToPlay;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);

  if (lettersShowing) {
    if (clickedKey.dataset.key === "a") {
      body.style.backgroundColor = "#222";

      canvas.style.display = "block";
      waves.style.display = "block";

      capybara.classList.add("capybaraActive");
      kraken.classList.add("krakenActive");
      capybara.style.display = "block";
      kraken.style.display = "block";

      isLightningActive = true;
      isRainActive = true;

      lightning();
    }

    if (clickedKey.dataset.key === "s") {
      jacksparrow.classList.add("jsActive");
      jacksparrow.style.display = "block";
    }

    if (clickedKey.dataset.key === "d") {
      jacksparrow.classList.add("jsShooting");
      kraken.classList.add("krakenDead");
      kraken.classList.remove("krakenActive");
    }

    if (clickedKey.dataset.key === "f") {
      fireworks.style.display = "block";
      canvas.style.display = "none";
      body.style.backgroundColor = "#05040c";
      capybara.classList.add("capybaraDance");
    }

    if (clickedKey.dataset.key === "g") {
      fireworks.style.display = "none";
      capybara.style.animation = "none";
      body.style.background = "linear-gradient(#000, #333)";
      clouds.style.display = "block";
      jacksparrow.classList.remove("jsShooting");
      jacksparrow.classList.remove("jsActive");
      jacksparrow.classList.add("jsDead");
    }

    if (clickedKey.dataset.key === "h") {
      jacksparrow.classList.add("jsSink");
      kraken.classList.add("krakenSink");
      capybara.style.display = "none";
      sadCapy.style.display = "block";
    }

    if (clickedKey.dataset.key === "j") {
      sans.style.display = "block";
      sans.classList.add("sansArrive");
      capybara.style.display = "block";
      sadCapy.style.display = "none";
      jebaited.innerHTML = "Who that?";
      jebaited.style.display = "block";
    }

    if (clickedKey.dataset.key === "k") {
      portal.style.display = "block";
      portal.classList.add("rm-portalAppear");
      rickMorty.style.display = "block";
      rickMorty.classList.add("rmArrive");
      jebaited.style.display = "none";
    }

    if (clickedKey.dataset.key === "l") {
      laser.style.display = "block";
      setTimeout(() => {
        sans.classList.add("sansDead");
      }, 1000);
    }

    if (clickedKey.dataset.key === "w") {
      rickMorty.style.display = "none";
      rickMortyAwayImage.style.display = "block";
      rickMortyAwayImage.classList.add("rickMortyAway");
      laser.style.display = "none";
    }

    if (clickedKey.dataset.key === "e") {
      capybara.style = "";
      toothless.style.display = "block";
      clouds.style.display = "none";
      body.style.background = "skyblue";
      sun.style.display = "block";
      capybara.style.display = "block";
      portal.style.display = "none";
      rickMortyAwayImage.style.display = "none";
      capybara.classList.remove("capybaraActive");
      capybara.classList.add("capybaraDance");
      capybara.classList.add("capybaraMove");
    }

    if (clickedKey.dataset.key === "t") {
      jebaited.innerHTML = "Hmm...?";
      jebaited.style.display = "block";
    }

    if (clickedKey.dataset.key === "y") {
      jebaited.innerHTML = "JEBAITED";
      jebaited.style.display = "block";
      dancers.style.display = "block";
    }

    if (clickedKey.dataset.key === "u") {
      jebaited.innerHTML = "Are you?";
    }

    if (clickedKey.dataset.key === "o") {
      jebaited.innerHTML = "";
      sans.style.display = "none";
      dancers.style.display = "none";
      toothless.style.display = "none";
      clouds.style.display = "block";
      canvas.style.display = "block";
      body.style.backgroundColor = "#05040c";
      sun.style.display = "none";
      capybara.classList.remove("capybaraDance");
      capybara.classList.remove("capybaraMove");
      capybara.classList.add("capyDead");

      isLightningActive = true;
      isRainActive = true;

      lightning();
    }

    if (clickedKey.dataset.key === ";") {
      rickAstley.style.display = "block";
    }

    if (clickedKey.dataset.key === "p") {
      endScreen.style.display = "block";
      setTimeout(() => {
        fireworks.style.display = "block";
        confetti.style.display = "flex";
        endtext.style.display = "flex";
      }, 4000);
    }
  }
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
  lettersShowing = !lettersShowing;

  if (lettersShowing) {
    header.innerHTML = "MEME PIANO";
  } else {
    header.innerHTML = "Just A PIANO";
  }
};

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) {
    playTune(e.key);
  }
};

checkbox.addEventListener("click", hideShowLetters);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);

// LIGHTNING CODE
const lightning = () => {
  let rainthroughnum = 500;
  const speedRainTrough = 25;
  const RainTrough = [];

  let rainnum = 500;
  const rain = [];

  const lightning = [];
  let lightTimeCurrent = 0;
  let lightTimeTotal = 0;

  let w = (canvas1.width = canvas2.width = canvas3.width = window.innerWidth);
  let h = (canvas1.height = canvas2.height = canvas3.height = window.innerHeight);

  window.addEventListener("resize", () => {
    w = canvas1.width = canvas2.width = canvas3.width = window.innerWidth;
    h = canvas1.height = canvas2.height = canvas3.height = window.innerHeight;
  });

  const random = (min, max) => Math.random() * (max - min + 1) + min;

  const clearcanvas1 = () => {
    ctx1.clearRect(0, 0, w, h);
  };

  const clearcanvas2 = () => {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  };

  const clearCanvas3 = () => {
    ctx3.globalCompositeOperation = "destination-out";
    ctx3.fillStyle = "rgba(0,0,0," + random(1, 30) / 100 + ")";
    ctx3.fillRect(0, 0, w, h);
    ctx3.globalCompositeOperation = "source-over";
  };

  const createRainTrough = () => {
    RainTrough.length = 0;
    for (let i = 0; i < rainthroughnum; i++) {
      RainTrough.push({
        x: random(0, w),
        y: random(0, h),
        length: Math.floor(random(1, 830)),
        opacity: Math.random() * 0.2,
        xs: random(-2, 2),
        ys: random(10, 20),
      });
    }
  };

  const createRain = () => {
    rain.length = 0;
    for (let i = 0; i < rainnum; i++) {
      rain.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10,
      });
    }
  };

  const createLightning = () => {
    lightning.length = 0; // Clear the array
    const x = random(100, w - 100);
    const y = random(0, h / 4);

    const createCount = random(1, 3);
    for (let i = 0; i < createCount; i++) {
      const single = {
        x: x,
        y: y,
        xRange: random(5, 30),
        yRange: random(10, 25),
        path: [
          {
            x: x,
            y: y,
          },
        ],
        pathLimit: random(40, 55),
      };
      lightning.push(single);
    }
  };

  const drawRainTrough = (i) => {
    ctx1.beginPath();
    const grd = ctx1.createLinearGradient(0, RainTrough[i].y, 0, RainTrough[i].y + RainTrough[i].length);
    grd.addColorStop(0, "rgba(255,255,255,0)");
    grd.addColorStop(1, "rgba(255,255,255," + RainTrough[i].opacity + ")");

    ctx1.fillStyle = grd;
    ctx1.fillRect(RainTrough[i].x, RainTrough[i].y, 1, RainTrough[i].length);
    ctx1.fill();
  };

  const drawRain = (i) => {
    ctx2.beginPath();
    ctx2.moveTo(rain[i].x, rain[i].y);
    ctx2.lineTo(rain[i].x + rain[i].l * rain[i].xs, rain[i].y + rain[i].l * rain[i].ys);
    ctx2.strokeStyle = "rgba(174,194,224,0.5)";
    ctx2.lineWidth = 1;
    ctx2.lineCap = "round";
    ctx2.stroke();
  };

  const drawLightning = () => {
    for (let i = 0; i < lightning.length; i++) {
      const light = lightning[i];

      light.path.push({
        x: light.path[light.path.length - 1].x + (random(0, light.xRange) - light.xRange / 2),
        y: light.path[light.path.length - 1].y + random(0, light.yRange),
      });

      if (light.path.length > light.pathLimit) {
        lightning.splice(i, 1);
      }

      ctx3.strokeStyle = "rgba(255, 255, 255, .1)";
      ctx3.lineWidth = 3;
      if (random(0, 15) === 0) {
        ctx3.lineWidth = 6;
      }
      if (random(0, 30) === 0) {
        ctx3.lineWidth = 8;
      }

      ctx3.beginPath();
      ctx3.moveTo(light.x, light.y);
      for (let pc = 0; pc < light.path.length; pc++) {
        ctx3.lineTo(light.path[pc].x, light.path[pc].y);
      }
      if (Math.floor(random(0, 30)) === 1) {
        ctx3.fillStyle = "rgba(255, 255, 255, " + random(1, 3) / 100 + ")";
        ctx3.fillRect(0, 0, w, h);
      }
      ctx3.lineJoin = "miter";
      ctx3.stroke();
    }
  };

  const animateRainTrough = () => {
    clearcanvas1();
    for (let i = 0; i < rainthroughnum; i++) {
      if (RainTrough[i].y >= h) {
        RainTrough[i].y = h - RainTrough[i].y - RainTrough[i].length * 5;
      } else {
        RainTrough[i].y += speedRainTrough;
      }
      drawRainTrough(i);
    }
  };

  const animateRain = () => {
    if (isRainActive) {
      clearcanvas2();
      for (let i = 0; i < rainnum; i++) {
        rain[i].x += rain[i].xs;
        rain[i].y += rain[i].ys;
        if (rain[i].x > w || rain[i].y > h) {
          rain[i].x = Math.random() * w;
          rain[i].y = -20;
        }
        drawRain(i);
      }
    } else {
      rain.length = 0;
    }
  };

  const animateLightning = () => {
    if (isLightningActive) {
      clearCanvas3();
      lightTimeCurrent++;
      if (lightTimeCurrent >= lightTimeTotal) {
        createLightning();
        lightTimeCurrent = 0;
        lightTimeTotal = 200;
      }
      drawLightning();
    } else {
      lightning.length = 0;
    }
  };

  const init = () => {
    createRainTrough();
    createRain();
    window.addEventListener("resize", createRainTrough);
  };
  init();

  const animloop = () => {
    animateRainTrough();
    animateRain();
    animateLightning();
    requestAnimationFrame(animloop);
  };
  animloop();
};
