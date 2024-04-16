var userClickedPattern = [];
var randomPattern = [];
var level = 0;
var clickedColor;
var userChosenColour;

var started = false;


$("body").keypress(function () {
    if (!started) {
        nextSequence();
        started = true;
    }
});


function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var gamePattern = [];

    var randomNumber = Math.floor(Math.random() * 4);

    var buttonColours = ["red", "blue", "green", "yellow"];

    var randomChosenColor = buttonColours[randomNumber];

    gamePattern.push(randomChosenColor);

    randomSavedPattern(randomChosenColor);


    //alert(copy);
    for (var i = 0; i < randomPattern.length; i++) {
        task(i);
    }

}


function task(i) {
    setTimeout(function () {
        playSound(randomPattern[i]);
    }, 700 * i);
}

$(".btn").click(function () {
    userChosenColour = this.id;
    input();
});

function input() {

    playSound(userChosenColour);

    userSavedPattern(userChosenColour);

    clickedColor = userChosenColour;

    checkAnswer(level);



}

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
            var red = new Audio("sounds/red.mp3");
            red.play();
            animatePress(name);
            break;
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            animatePress(name);
            break;
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            animatePress(name);
            break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            animatePress(name);
            break;

        default:
            console.log("error");
    }


}

//This function compares the users imput with the random imput pattern.
function checkAnswer() {

    var lastRandomElement = randomPattern.slice(-1);

    var answer = (userClickedPattern.toString() === lastRandomElement.toString());

    if (answer == true) {
        setTimeout(() => {
            nextSequence();
        }
            , 1000);
    } else {
        $("body").addClass("game-over");

        setTimeout(() => {
            $("body").removeClass("game-over").addClass("body");
        }
            , 200);
        $("#level-title").text("Game Over!");
        var error = new Audio("sounds/wrong.mp3");
        error.play();
    }

}


