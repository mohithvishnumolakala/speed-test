const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endgameElement = document.getElementById("end-game-container");
const settingsButton = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");


const words = [
  "planet",
"galaxy",
"astronaut",
"spaceship",
"moon",
"comet",
"nebula",
"meteor",
"star",
"orbit",
"rocket",
"spacewalk",
"cosmos",
"supernova",
"black hole",
"alien",
"solar system",
"universe",
"satellite",
"space station",
"exploration",
"interstellar",
"gravity",
"astronomer",
"observatory",
"cosmonaut",
"asteroid",
"lunar",
"mars",
"venus",
"mercury",
"jupiter",
"saturn",
"uranus",
"neptune",
"pluto",
"red giant",
"white dwarf",
"pulsar",
"dark matter",
"dark energy",
"light-year",
"constellation",
"hubble",
"telescope",
"exoplanet",
"galaxy cluster",
"space debris",
"space probe",
"interplanetary",
"exosphere",
"milky way",
"big bang",
"quasar",
"space dust",
"black sky",
"rocket fuel",
"solar flare",
"solar wind",
"lunar eclipse",
"solar eclipse",
"celestial body",
"gravity well",
"outer space",
"inner space",
"microgravity",
"space travel",
"spacecraft",
"launchpad",
"mission control",
"extraterrestrial",
"life on mars",
"space tourism",
"space exploration",
"space race",
"lunar landing",
"martian colony",
"planetary rover",
"space shuttle",
"space suit",
"weightlessness",
"lunar module",
"mission to mars",
"asteroid belt",
"meteor shower",
"space colonization",
"rocket launch",
"space elevator",
"gravitational pull",
"lunar base",
"lunar orbiter",
"space habitat",
"spacewalk",
"zero gravity",
"solar eclipse",
"lunar landscape",
"space telescope",
"astronaut training",
"rocket booster",
"lunar module",
"cosmonautics",
"telemetry",
"interplanetary",
"ionosphere",
"heliosphere",
"interstellar",
"starlight",
"asterism",
"stellar",
"nebular",
"galactic",
"supernovae",
"intergalactic",
"cosmonaut",
"geocentric",
"celestial",
"stellar",
"nebular",
"galactic",
"supernovae",
"intergalactic",
"cosmonaut",
"geocentric",
"celestial",
"astrology",
"astrophysics",
"astronomical",
"cosmic",
"telescopic",
"cosmology",
"meteorological",
"lunatic",
"astral",
"asteroidal",
"cosmogony",
"parallax",
"heliospheric",
"geostationary",
"telescope",
"cosmopolitan",
"cosmodrome",
"celestial",
"stellar",
"nebular",
"galactic",
"supernovae",
"intergalactic",
"cosmonaut",
"geocentric",
"celestial",
"astrology",
"astrophysics",
"astronomical",
"cosmic",
"telescopic",
"cosmology",
"meteorological",
"lunatic",
"astral",
"asteroidal",
"cosmogony",
"parallax",
"heliospheric",
"geostationary",
"telescope",
"cosmopolitan",
"cosmodrome",
"celestial",
"stellar",
"nebular",
"galactic",
"supernovae",
"intergalactic",
"cosmonaut",
"geocentric",
"celestial",
"astrology",
"astrophysics",
"astronomical",
"cosmic",
"telescopic",
"cosmology",
"meteorological",
"lunatic",
"astral",
"asteroidal",
"cosmogony",
"parallax",
"heliospheric",
"geostationary",
"telescope",
"cosmopolitan",
"cosmodrome",
"celestial",
"stellar",
"nebular",
"galactic",
"supernovae",
"intergalactic",
"cosmonaut",
"geocentric",
"celestial",
"astrology",
"astrophysics",
"astronomical",
"cosmic",
"telescopic",
"cosmology",
"meteorological",
"lunatic",
"astral",
"asteroidal",
"cosmogony",
"parallax",
"heliospheric",
"geostationary",
"telescope",
"cosmopolitan",
"cosmodrome",
"celestial",
"stellar",
"nebular",
"galactic",
"supernovae",
"intergalactic",
"cosmonaut",
"geocentric",
"celestial",
"astrology",
"astrophysics",
"astronomical",
"cosmic",
"telescopic",
"cosmology",
"meteorological",
"lunatic",
"astral",
"asteroidal",
"cosmogony",
"parallax",
"heliospheric",
"geostationary",
"telescope",
"cosmopolitan",
"cosmodrome",
"celestial",
"stellar",
"nebular",
"galactic",
"supernovae",
"intergalactic",
"cosmonaut",
"geocentric",
"celestial",
"astrology",
"astrophysics",
"astronomical",
"cosmic",
"telescopic",
"cosmology",
"meteorological",
"lunatic",
"astral",
"asteroidal",
"cosmogony",
"parallax",
"heliospheric",
"geostationary",
"telescope",
];

let randomWord;
let score = 0;
let time = 60; 
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDom() {
  randomWord = getRandomWord();
  word.innerText = randomWord;
}

function updateScore() {
  score++;
  scoreElement.innerText = score;
}

function updateTime() {
  time--;
  timeElement.innerText = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameElement.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="history.go(0)">Play Again</button>
    `;
  endgameElement.style.display = "flex";
}

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    e.target.value = "";
    addWordToDom();
    updateScore();
    if (difficulty === "hard") time += 2;
    else if (difficulty === "medium") time += 3;
    else time += 5;
    updateTime();
  }
});

settingsButton.addEventListener("click", () =>
  settings.classList.toggle("hide")
);
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});

difficultySelect.value = difficulty;
addWordToDom();
text.focus();
