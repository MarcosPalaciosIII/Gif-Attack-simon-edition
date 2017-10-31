var redBtn = $(".red");
var blueBtn = $(".blue");
var yellowBtn = $(".yellow");
var greenBtn = $(".green");
var purpleBtn = $(".purple");
// var start = document.querySelector("#start-btn");
// var reset = document.querySelector("#reset-btn");

var playerScore = $("#current-level");

var level = 0;
var userInput = [];
var sequenceCopy;
var gameSequence = [];

var colors = ['red', 'blue', 'yellow', 'green', 'purple'];
var speed = 600;
var win;
var lose;

var gameReset = function () {
  userInput = [];
};

var audio1 = new Audio(
  './sounds/chime1.wav');
var audio2 = new Audio(
  './sounds/chime2.wav');
var audio3 = new Audio(
  './sounds/chime3.wav');
var audio4 = new Audio(
  './sounds/chime4.wav');
var audio5 = new Audio('./sounds/chime5.wav');
var audioBuzzer = new Audio('./sounds/buzzer.mp3');

$('.tiles').on('mousedown', function() {
    $(this).addClass('brighten');
}).on('mouseup', function() {
    $(this).removeClass('brighten');
});

function beep(audio) {
  switch (audio) {
    case 'audio1':
      audio1.play();
      break;
    case 'audio2':
      audio2.play();
      break;
    case 'audio3':
      audio3.play();
      break;
    case 'audio4':
      audio4.play();
      break;
    case 'audio5':
      audio5.play();
      break;
    case 'audioBuzzer':
      audioBuzzer.play();
      break;
  }
}

function getColor(num) {
  /* Generate a random number between 0 and 4
  Red: 0   Blue: 1   Yellow: 2   Green: 3
  Purple: 4 */
  return [Math.floor(Math.random() * num)];
}

function NewRound() {
  // Adds new random color and sends the sequence to be animated
  var color = getColor(5);
  gameSequence.push(color);
  sequenceCopy = Array.from(gameSequence);
  userInput = [];

  if (level >= 4) speed = 400;
  if (level >= 8) speed = 200;
  if (level >= 12) speed = 100;

  animate();
  level += 1;
  updateLevel();
}

function updateLevel() {
  $('.current-level').text("Level: " + level);
}

function animate() {
  var i = 0;
  var interval = setInterval(function() {
    console.log(gameSequence[i]);
    LightUp(gameSequence[i]);

    i++;
    if (i >= gameSequence.length) {
      clearInterval(interval);
    }
  },
  speed);
}

function LightUp(tile) {

  tile.forEach(function(color, index){
    var audio = 'audio' + color;
    beep(audio);
    console.log("power" + color);
    var $tile = $("[data-tile ='+ index + ']");

    // var $tile = document.querySele.ctorAll('.tiles');

    console.log($tile);


    $tile.addClass('brighten');

    window.setTimeout(function() {
      $tile.removeClass('brighten');
    },
    speed / 2);

  });
}


function gameOver() {
  if (win == true) {
    $('.win').removeClass('hidden');
  } else {
    $('.lose').removeClass('hidden');
  }
}

function resetGame() {
  $('#start-btn').removeClass('brighten');
  $('#start-btn').removeClass('hidden');
  $('#reset-btn').addClass('hidden');
  gameSequence = [];
  userInput = [];
  level = 0;
  updateLevel();
  speed = 600;
}

function startOption() {
  // start button function
  if (!$('#start-btn').hasClass('brighten')) {
    $('#start-btn').addClass('brighten');
    if ($('#start-btn').hasClass('brighten')) {
      $('#reset-btn').removeClass('hidden');
      // $('#start-btn').addClass('hidden');

      NewRound();
    } else {
      $('#start-btn').removeClass('brighten');
      $('#start-btn').removeClass('hidden');
      resetGame();
    }
  }
}


function playerMove() {

    var position = $(this).data('tile');
    userInput.push(position);

    if (userInput[userInput.length - 1] !== gameSequence[userInput.length - 1]) {
      beep('audioBuzzer');

    } else {
      var audio = 'audio' + $(this).data('tile');
      beep(audio);

      var exp = gameSequence.length === userInput.length;
      if (exp) {

        if (level === 20) {
          win = true;
          gameOver();
        } else {
          NewRound();
        }
      }
    }
}

$(document).ready(function () {
  $('#reset-btn').click(function() {
    resetGame();
    console.log('reset');
  });
});

$(document).ready(function () {
  $('#start-btn').click(function () {
    startOption();
    console.log('start');
  });
  playerMove();
});
