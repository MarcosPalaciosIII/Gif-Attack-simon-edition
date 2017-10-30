function newRound() {
    var sequence = [1,2,1]; //red, green, red
    animate(sequence);
}

function animate(sequence) {
    var i = 0;
    var interval = setInterval(function() {
        lightUp(sequence[i]);

        i++;
        if (i >= sequence.length) {
            clearInterval(interval);
        }
   }, 600);
}

function lightup(tile) {
    var $tile = $('[data-tile=' + tile + ']').addClass('lit');
    window.setTimeout(function() {
        $tile.removeClass('lit');
    }, 300);

}

var addColor = function(arr) {
  var colorsArray = ["green", "red", "yellow", "blue", "purple"];
  return arr.push(colorsArray[Math.floor(Math.random() * colorsArray.length)]);
};

var flashLights = function(arr) {
  var i = 0;

  var interval = setInterval(function() {
    $("#" + arr[i]).fadeTo("slow", 0).fadeTo("slow", 1);
    if (i >= arr.length) {
      clearInterval(interval);
    }
  }, 1500);
};
