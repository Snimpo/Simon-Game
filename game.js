var userClickedPattern = [];
var randomPattern = [];
var level = 0;

$("body").on("keydown", nextSequence()); 

function nextSequence(){

    $("#level-title").text("Level " + level);

    var gamePattern = [];

    var randomNumber = Math.floor(Math.random() * 4);

    var buttonColours = ["red", "blue", "green", "yellow"];

    var randomChosenColor = buttonColours[randomNumber];

    gamePattern.push(randomChosenColor);

    randomSavedPattern(randomChosenColor);
    var copy = randomPattern.map((x)=>x) ; // Shallow copy

    //alert(copy);
    for(var i = 0; i < randomPattern.length;i++){
        task(i);
    }
    level = level + 1;

    
}


function task(i) {
    setTimeout(function() {
        playSound(randomPattern[i]);
    }, 700 * i);
}






$(".btn").click(function () {

    var userChosenColour = this.id;

    playSound(userChosenColour);

    userSavedPattern(userChosenColour);

    checkAnswer();
    

});

function randomSavedPattern(randomColor) {
    randomPattern.push(randomColor);
    console.log(randomPattern);
}

function userSavedPattern(color) {
    userClickedPattern.push(color);
    console.log(userClickedPattern);
}

//This fucntion allows us to setup a flashing effect.
function animatePress(currentColour) {

    $("#" + currentColour).removeClass(currentColour).addClass(".pressed");
    var prevColor = currentColour;

    setTimeout(() => {
        $("#" + currentColour).removeClass(".pressed").addClass(prevColor);
    }
        , 100);

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


}

//This function compares the users imput with the random imput pattern.
function checkAnswer() {

    var answer = (userClickedPattern.toString() === randomPattern.toString());

    if (answer == true){
        setTimeout(() => {
            nextSequence();
        }
            , 1000);
    } else {
        alert("You have lost!")
    }


}
