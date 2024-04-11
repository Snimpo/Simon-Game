var userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColour = this.id;

  playSound(userChosenColour);
  
  savedPattern(userChosenColour);
});

function savedPattern(color) {
  userClickedPattern.push(color);
  console.log(userClickedPattern);
}

//This fucntion allows us to setup a flashing effect.
$.fn.flash = function (times, duration) {
  var $element = this;
  times = times || 3;
  duration = duration || 200;

  for (var i = 0; i < times; i++) {
    (function () {
      setTimeout(function () {
        $element.fadeOut(duration, function () {
          $element.fadeIn(duration);
        });
      }, i * duration * 2 + 50);
    })(i);
  }
};

function playSound(name) {

    switch (name) {
      case "red":
        var crash = new Audio("sounds/red.mp3");
        crash.play();
        $("#" + name).flash(1, 200);
        break;
      case "blue":
        var kick = new Audio("sounds/blue.mp3");
        kick.play();
        $("#" + name).flash(1, 200);
        break;
      case "green":
        var snare = new Audio("sounds/green.mp3");
        snare.play();
        $("#" + name).flash(1, 200);
        break;
      case "yellow":
        var tom1 = new Audio("sounds/yellow.mp3");
        tom1.play();
        $("#" + name).flash(1, 200);
        break;

      default:
        console.log("error");
    }
/** 
    function nextSequence() {
        var gamePattern = [];
    
        var randomNumber = Math.floor(Math.random() * 4);
    
        var buttonColours = ["red", "blue", "green", "yellow"];
    
        var randomChosenColor = buttonColours[randomNumber];
    
        gamePattern.push(randomChosenColor);
    
        //return (buttonColours[randomNumber]);
    
    //alert(randomNumber);
  }
*/

}
//nextSequence();
