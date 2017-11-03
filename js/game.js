var redBtn = $(".red");
var blueBtn = $(".blue");
var yellowBtn = $(".yellow");
var greenBtn = $(".green");
var purpleBtn = $(".purple");

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
  './sounds/chime1.mp3');
var audio2 = new Audio(
  './sounds/chime2.mp3');
var audio3 = new Audio(
  './sounds/chime3.wav');
var audio4 = new Audio(
  './sounds/chime4.wav');
var audio5 = new Audio('./sounds/chime5.wav');
var audioBuzzer = new Audio('./sounds/buzzer.mp3');

var winGif = [
  'https://media.giphy.com/media/2HvJkijHHbcgU/giphy.gif',
  'https://media.giphy.com/media/kKJouhLunPQR2/giphy.gif',
  'https://media.giphy.com/media/6brH8dM3zeMyA/giphy.gif',
  'https://media.giphy.com/media/10qPHayLlMJxw4/giphy.gif',
  'https://media.giphy.com/media/hZj44bR9FVI3K/giphy.gif',
  'https://media.giphy.com/media/wgbwUb8P8beak/giphy.gif',
  'https://media.giphy.com/media/11At2NcE4qXz4Q/giphy.gif',
  'https://media.giphy.com/media/UttZVMEzceMOQ/giphy.gif',
  'https://media.giphy.com/media/B41qnm0DEUqUE/giphy.gif'
];


  var combatGif = [
    'https://media.giphy.com/media/Ls9LO86lg5IiY/giphy.gif',
    'https://media.giphy.com/media/11A5tg9rVGa7Ty/giphy.gif',
    'https://media.giphy.com/media/kwbwSHWa7pguk/giphy.gif',
    'https://media.giphy.com/media/XR3S6u9Hk5qDK/giphy.gif',
    'https://media.giphy.com/media/YlZmQL5FKofgA/giphy.gif',
    'https://media.giphy.com/media/DDUMuxZwEEJGw/giphy.gif',
    'https://media.giphy.com/media/zfaOYMCGZSFwY/giphy.gif',
    'https://media.giphy.com/media/3o6UB65bfF8P1anIZ2/giphy.gif',
    'https://media.giphy.com/media/f5UwtpUbrAEE0/giphy.gif',
    'https://media.giphy.com/media/JiVCHHnuf4nXa/giphy.gif',
    'https://media.giphy.com/media/g4BcE4UhLhNks/giphy.gif',
    'https://media.giphy.com/media/7WuZEn6nbxcgE/giphy.gif',
    'https://media.giphy.com/media/FrRr2wfeUPIGY/giphy.gif',
    'https://media.giphy.com/media/Iy2QQ78yvOroA/giphy.gif',
    'https://media.giphy.com/media/tj7q6n5L4qW7m/giphy.gif',
    'https://media.giphy.com/media/MVgEZjevKLTzy/giphy.gif',
    'https://media.giphy.com/media/FBYKU4iWLo7mw/giphy.gif',
    'https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif',
    'https://media.giphy.com/media/tdHYaCkmFtY4M/giphy.gif',
    'https://media.giphy.com/media/pkW0cgpEvDmb6/giphy.gif',
    'https://media.giphy.com/media/5GUp79EEUZ6wg/giphy.gif',
    'https://media.giphy.com/media/PAXXsQ7rPah68/giphy.gif',
    'https://media.giphy.com/media/xFLHQdTt681dm/giphy.gif',
    'https://media.giphy.com/media/l2JdXH0qv2QdobAwE/giphy.gif',
    'https://media.giphy.com/media/2As195WtHg5uo/giphy.gif',
    'https://media.giphy.com/media/13r36l3Z7YCZDG/giphy.gif'
  ];

  var loseGif = [
    'https://media.giphy.com/media/9VpyROhvUZ1gA/giphy.gif',
    'https://media.giphy.com/media/yw9SowqJnBu5G/giphy.gif',
    'https://media.giphy.com/media/vRjPmn64qgbhm/giphy.gif',
    'https://media.giphy.com/media/osr4xPzePao12/giphy.gif',
    'https://media.giphy.com/media/rGiSnj9YEerGo/giphy.gif',
    'https://media.giphy.com/media/ZSPsir4tV5kL6/giphy.gif',
    'https://media.giphy.com/media/XUVMNSuI7uI7u/giphy.gif',
    'https://media.giphy.com/media/l3PWa5KL8nY4M/giphy.gif',
    'https://media.giphy.com/media/S2PT8LVG8gMMw/giphy.gif',
    'https://media.giphy.com/media/O3N85I35pVU52/giphy.gif',
    'https://media.giphy.com/media/3ohuAxV0DfcLTxVh6w/giphy.gif',
    'https://media.giphy.com/media/iueKR0ye2AMiA/giphy.gif',
    'https://media.giphy.com/media/3xM3vNRTM6mVG/giphy.gif',
    'https://media.giphy.com/media/3o6Zt2ls5l2HrVesBq/giphy.gif',
    'https://media.giphy.com/media/l2JdZEIie6tRGGQy4/giphy.gif',
    'https://media.giphy.com/media/13FOYj8cuVcbTi/giphy.gif'
  ];

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
  $('.gameGif').attr('src', combatGif[Math.floor(Math.random() * combatGif.length)]);

  setTimeout(function() {
    $(".user-turn").addClass("hidden");
    $(".ai-turn").removeClass("hidden");
    $(".fight").removeClass("hidden");
  },
  300
  );

  for (var i = 0; i < 1; i++) {
    var color = getColor();
    gameSequence.push(color);
  }

  userInput = [];

  if (level >= 4) speed = 800;
  if (level >= 8) speed = 600;
  if (level >= 12) speed = 300;
  if (level >= 19) speed = 200;
  if (level >= 25) speed = 100;

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

  var html = "[data-tile = " + tileNumber +"]";

  var $tile = $(html);

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
    $('.gameGif').attr('src', winGif[Math.floor(Math.random() * winGif.length)]);
  } else {
    $('.lose').removeClass('hidden');
    $('.gameGif').attr('src', loseGif[Math.floor(Math.random() * loseGif.length)]);
    if (!$('.ready').hasClass('hidden')) {
      $('.ready').addClass('hidden');
    }
    if (!$('.user-turn').hasClass('hidden')) {
      $('.user-turn').addClass('hidden');
    }
    if (!$('.ai-turn').hasClass('hidden')) {
      $('.ai-turn').addClass('hidden');
    }
  }

}

function resetGame() {
  // reset game function
  $('.start-btn').removeClass('brighten');
  $('.start-btn').removeClass('hidden');
  $('.reset-btn').addClass('hidden');

  if (!$('.fight').hasClass('hidden')) {
    $('.fight').addClass('hidden');
  }
  if (!$('.win').hasClass('hidden')) {
    $('.win').addClass('hidden');
  }
  if (!$('.lose').hasClass('hidden')) {
    $('.lose').addClass('hidden');
  }

  setTimeout(function() {
    $(".ready").removeClass("hidden");
    $(".incoming").removeClass("hidden");
  },
  300
  );

  if (win == true) {
    $('.win').addClass('hidden');
  } else {
    $('.lose').addClass('hidden');
  }
  if (!$(".user-turn").hasClass("hidden")) {
    $(".user-turn").addClass("hidden");
  }
  gameSequence = [];
  userInput = [];
  level = 0;
  updateLevel();
  speed = 1000;
  $(".gameGif").attr("src", "https://media.giphy.com/media/b4R0bZrNCwYzm/giphy.gif");
}

function startOption() {
  // start button function
  if (!$('.start-btn').hasClass('brighten')) {
    $('.start-btn').addClass('brighten');
    if ($('.start-btn').hasClass('brighten')) {
      $('.reset-btn').removeClass('hidden');
      $('.start-btn').addClass('hidden');
      setTimeout(function() {
        $(".ready").addClass("hidden");
        $(".incoming").addClass("hidden");
      },
      300
      );


      NewRound();
    } else {
      $('.start-btn').removeClass('brighten');
      $('.start-btn').removeClass('hidden');
      resetGame();
    }
  }
}


function playerMove(event) {
  //player move fnction
    setTimeout(function() {
      $(".user-turn").removeClass("hidden");
      $(".ai-turn").addClass("hidden");
    },
    300
    );

    $(".tiles").unbind().on('click', function() {
      var position = $(this).data("tile");
      userInput.push(position);

      if (userInput.length === gameSequence.length) {
        $(".user-turn").addClass("hidden");
      }

      if (userInput[userInput.length - 1] !== gameSequence[userInput.length - 1]) {
        beep('audioBuzzer');

        if (!$('.user-turn').hasClass('hidden')) {
          $('.user-turn').addClass('hidden');
        }
        gameOver();

      } else {
        var audio = 'audio' + $(this).data('tile');
        beep(audio);

        var exp = gameSequence.length === userInput.length;
        if (exp) {

          if (level === 27) {
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
  $('.reset-btn').click(function() {
    resetGame();

  });

  $('.start-btn').click(function (event) {
    startOption();

  });
});
