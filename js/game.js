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
var speed = 1000;
var win;
var lose;


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
    case 'audio0':
      audio1.play();
      break;
    case 'audio1':
      audio2.play();
      break;
    case 'audio2':
      audio3.play();
      break;
    case 'audio3':
      audio4.play();
      break;
    case 'audio4':
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
  return Math.floor(Math.random() * 5);
}

function NewRound() {
  // Adds new random color and sends the sequence to be animated

  setTimeout(function() {
    $(".user-turn").addClass("hidden");
  },
  600
  );

  for (var i = 0; i < 1; i++) {
    var color = getColor();
    gameSequence.push(color);
  }
  // console.log("userInput before empty: " + userInput);
  // sequenceCopy = Array.from(gameSequence);
  userInput = [];

    // console.log("userInput after empty: " + userInput);

  if (level >= 4) speed = 800;
  if (level >= 8) speed = 600;
  if (level >= 12) speed = 300;

  animate(playerMove);
  level += 1;
  updateLevel();
}

function updateLevel() {
  $('.current-level').text("Level: " + level);
}

function animate(callback) {
  var i = 0;
  var interval = setInterval(function() {
    console.log(gameSequence[i]);
    LightUp(gameSequence[i]);

    i++;
    if (i >= gameSequence.length) {
      clearInterval(interval);
      callback();
    }
  },
  speed);
}

function LightUp(tileNumber) {
  var audio = 'audio' + tileNumber;
  beep(audio);
  // console.log("power" + tileNumber);

  var html = "[data-tile = " + tileNumber +"]";

  console.log(html);
  var $tile = $(html);

  // console.log("This is $tile:",$tile);


  $tile.addClass('brighten');

  window.setTimeout(function() {
    $tile.removeClass('brighten');
  },
  speed / 2);

}

function gameOver() {
  // game over function
  if (win == true) {
    $('.win').removeClass('hidden');
  } else {
    $('.lose').removeClass('hidden');
  }

}

function resetGame() {
  // reset game function
  $('#start-btn').removeClass('brighten');
  $('#start-btn').removeClass('hidden');
  $('#reset-btn').addClass('hidden');
  if (win == true) {
    $('.win').addClass('hidden');
  } else {
    $('.lose').addClass('hidden');
  }
  gameSequence = [];
  userInput = [];
  level = 0;
  updateLevel();
  speed = 1000;
}

function startOption() {
  // start button function
  if (!$('#start-btn').hasClass('brighten')) {
    $('#start-btn').addClass('brighten');
    if ($('#start-btn').hasClass('brighten')) {
      $('#reset-btn').removeClass('hidden');
      $('#start-btn').addClass('hidden');

      NewRound();
    } else {
      $('#start-btn').removeClass('brighten');
      $('#start-btn').removeClass('hidden');
      resetGame();
    }
  }
}


function playerMove(event) {
  //player move fnction
    console.log("player move");

    setTimeout(function() {
      $(".user-turn").removeClass("hidden");
    },
    600
    );

    console.log('the game sequence: ' + gameSequence);

    $(".tiles").on('click', function() {
      var position = $(this).data("tile");
      userInput.push(position);

      if (userInput.length === gameSequence.length) {
        $(".user-turn").addClass("hidden");
      }

      console.log(userInput);


      if (userInput[userInput.length - 1] !== gameSequence[userInput.length - 1]) {
        beep('audioBuzzer');

        gameOver();

      } else {
        var audio = 'audio' + $(this).data('tile');
        beep(audio);

        var exp = gameSequence.length === userInput.length;
        if (exp) {

          if (level === 15) {
            win = true;
            gameOver();
          } else {
            NewRound();
          }
        }
      }
    });
  }

$(document).ready(function () {
  $('#reset-btn').click(function() {
    resetGame();
    console.log('reset');
  });

  $('#start-btn').click(function (event) {
    startOption();

  });
});
