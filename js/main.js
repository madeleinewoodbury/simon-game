let simonBtns;
let playerBtns;
let click;
let level;

// Start Game
const initGame = () => {
  $('.start-btn').off('click', initGame);
  setInitValues();
  simonPlays();
};

const setInitValues = () => {
  simonBtns = [];
  playerBtns = [];
  level = 1;
  $('.level').removeClass('game-over');
};

// Simon Plays
const simonPlays = () => {
  $('.level').text(`Level ${level}`);
  watch();
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
    $('.box').on('click', playerClick);
    play();
  }, 1000);
};

const playerClick = e => {
  let target = $(e.target);
  let btn = parseInt(target.attr('data-num'));
  playerBtns.push(btn);
  playCurrentBtn(btn);
  compare();
};

// Compare current button with Simon's buttons
const compare = () => {
  if (playerBtns[click] === simonBtns[click]) {
    click++;
    if (click >= simonBtns.length) {
      $('.box').off('click', playerClick);
      level++;
      setTimeout(simonPlays, 750);
    }
  } else {
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
  $(`.${color}`).addClass(`${color}-press`);
  setTimeout(() => {
    $(`.${color}`).removeClass(`${color}-press`);
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
  $('.box').off('click', playerClick);

  const errorSound = new Audio('audio/error_sound.mp3');
  setTimeout(() => {
    errorSound.play();

    $('.start-btn')
      .removeClass('play')
      .text('Start')
      .on('click', initGame);

    $('.level')
      .addClass('game-over')
      .text(`Game Over... You made it to level ${level}`);
  }, 750);
};

// Start Button
const watch = () => {
  $('.start-btn')
    .removeClass('play')
    .addClass('watch')
    .text('Watch');
};

const play = () => {
  $('.start-btn')
    .removeClass('watch')
    .addClass('play')
    .text('Play');
};

$('.start-btn').on('click', initGame);
