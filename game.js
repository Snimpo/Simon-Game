var userClickedPattern = [];
var randomPattern = [];
var level = 0;
var clickedColor;
var userChosenColour;

$("body").on("keydown", nextSequence());

function nextSequence() {

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

    playSound(userChosenColour);

    userSavedPattern(userChosenColour);
    clickedColor = userChosenColour;


    checkAnswer(level);



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



    //var answer = (randomPattern[level].toString() === userChosenColour);
    var counter = 0;




//working on the loop waiting for the user to imput all the values before running a new random pattern
    if (randomPattern[level].toString() === userChosenColour && counter < randomPattern.length) {

        setTimeout(() => {
            nextSequence();

        }
            , 1000);

    }else{




    }




        userClickedPattern = [];
        while (counter < randomPattern.length) {

            setTimeout(() => {
                nextSequence();

            }
                , 1000);

            counter = counter + 1;

        }

    } else {
        alert("You have lost!")
    }


}
