

//This function will determine what the nex color on the patern will be. 
document.getElementById("red").addEventListener("click", nextSequence);



function nextSequence() {


    var gamePattern =[];
    

    var randomNumber = Math.floor(Math.random() * 4);
    

    var buttonColours = ["red", "blue", "green", "yellow"];

    var randomChosenColor = buttonColours[randomNumber];

    gamePattern.push(randomChosenColor);

    //return (buttonColours[randomNumber]);
    
    $('#'+randomChosenColor).flash(1, 200);
    playSound(randomNumber);

    
    //alert(randomNumber);
}

//This fucntion allows us to setup a flashing effect.
$.fn.flash = function(times, duration) {
    var $element = this;
    times = times || 3;
    duration = duration || 200;

    for (var i = 0; i < times; i++) {
        (function() {
            setTimeout(function() {
                $element.fadeOut(duration, function() {
                    $element.fadeIn(duration);
                });
            }, i * duration * 2 + 50);
        })(i);
    }
};

function playSound(n){

    switch(n){
        case 0:
            var crash = new Audio("sounds/red.mp3");
            crash.play();
            break;
        case 1:
            var kick = new Audio("sounds/blue.mp3");
            kick.play();
            break;  
        case 2:
            var snare = new Audio("sounds/green.mp3");
            snare.play();
            break;
        case 3:
            var tom1 = new Audio("sounds/yellow.mp3");
            tom1.play();
            break;

        default: console.log("error");

    }

    
}


nextSequence();