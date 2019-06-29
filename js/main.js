const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const btnContainer = document.querySelector('.container');
const startBtn = document.querySelector('.start-btn');
const errorSound = new Audio('audio/error_sound.mp3');

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
