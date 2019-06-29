const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const btnContainer = document.querySelector('.container');
const startBtn = document.querySelector('.start-btn');
const errorSound = new Audio('audio/error_sound.mp3');

const simonBtns = [];
let playerBtns;

let click;

// Simon Plays
const simonPlays = () => {
  // Add random num to simonBtns
  getRandom();

  let i = 0;
  let moves = setInterval(() => {
    playCurrentBtn(simonBtns[i]);
    i++;
    if (i >= simonBtns.length) {
      clearInterval(moves);
      playerTurn();
    }
  }, 1000);
};

// Player's turn
const playerTurn = () => {
  click = 0;
  playerBtns = [];

  setTimeout(() => {
    btnContainer.addEventListener('click', playerClick);
  }, 1000);
};

const playerClick = e => {
  if (e.target.classList.contains('box')) {
    let btn = parseInt(e.target.getAttribute('data-num'));
    playerBtns.push(btn);
    playCurrentBtn(btn);
    compare();
  }
};

// Compare current button with Simon's buttons
const compare = () => {
  if (playerBtns[click] === simonBtns[click]) {
    click++;
    if (click >= simonBtns.length) {
      btnContainer.removeEventListener('click', playerClick);
      simonPlays();
    }
  } else {
    btnContainer.removeEventListener('click', playerClick);
    gameOver();
  }
};

// Plays current button
const playCurrentBtn = btn => {
  switch (btn) {
    case 1:
      playBlue();
      break;
    case 2:
      playRed();
      break;
    case 3:
      playGreen();
      break;
    case 4:
      playYellow();
      break;
    default:
      break;
  }
};

// Add random btn to simon
const getRandom = () => {
  let num = Math.floor(Math.random() * 4) + 1;
  simonBtns.push(num);
};

// Display button press with 'press' class
const displayBtnPress = color => {
  document.querySelector(`.${color}`).classList.add(`${color}-press`);
  setTimeout(() => {
    document.querySelector(`.${color}`).classList.remove(`${color}-press`);
  }, 500);
};

// Buttons
const playBlue = () => {
  const sound = new Audio('audio/blue.mp3');
  sound.play();
  displayBtnPress('blue');
};

const playRed = () => {
  const sound = new Audio('audio/red.mp3');
  sound.play();
  displayBtnPress('red');
};

const playGreen = () => {
  const sound = new Audio('audio/green.mp3');
  sound.play();
  displayBtnPress('green');
};

const playYellow = () => {
  const sound = new Audio('audio/yellow.mp3');
  sound.play();
  displayBtnPress('yellow');
};

const gameOver = () => {
  console.log('Game over');
};
