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
function animatePress(currentColour){

    $("#"+currentColour).removeClass(currentColour).addClass(".pressed");
    var prevColor = currentColour;
   
    setTimeout(()=> {
        $("#"+currentColour).removeClass(".pressed").addClass(prevColor);
     }
     ,100);

};

function playSound(name) {

    switch (name) {
      case "red":
        var crash = new Audio("sounds/red.mp3");
        crash.play();
        animatePress(name);
        break;
      case "blue":
        var kick = new Audio("sounds/blue.mp3");
        kick.play();
        animatePress(name);
        break;
      case "green":
        var snare = new Audio("sounds/green.mp3");
        snare.play();
        animatePress(name);
        break;
      case "yellow":
        var tom1 = new Audio("sounds/yellow.mp3");
        tom1.play();
        animatePress(name);
        break;

      default:
        console.log("error");
    }
 
   /* function nextSequence() {
        var gamePattern = [];
    
        var randomNumber = Math.floor(Math.random() * 4);
    
        var buttonColours = ["red", "blue", "green", "yellow"];
    
        var randomChosenColor = buttonColours[randomNumber];
    
        gamePattern.push(randomChosenColor);


        switch (randomChosenColor) {
            case "red":
              var crash = new Audio("sounds/red.mp3");
              crash.play();
              $("#" + randomChosenColor).flash(1, 200);
              break;
            case "blue":
              var kick = new Audio("sounds/blue.mp3");
              kick.play();
              $("#" + randomChosenColor).flash(1, 200);
              break;
            case "green":
              var snare = new Audio("sounds/green.mp3");
              snare.play();
              $("#" + randomChosenColor).flash(1, 200);
              break;
            case "yellow":
              var tom1 = new Audio("sounds/yellow.mp3");
              tom1.play();
              $("#" + randomChosenColor).flash(1, 200);
              break;
      
            default:
              console.log("error");
          }
    
        
    
    //alert(randomNumber);
  }
  nextSequence();
/** */

}
//nextSequence();
