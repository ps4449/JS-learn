var colSet = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var start = false;

// To start the game
$(document).keypress(function () {
	if(!start) {
		$("#level-title").text("Level " + level);
		nextSequence();
		start = true;
	}
});

// To create the memorization sequence
function nextSequence() {
	level = level + 1;
	userClickedPattern = [];
	$("#level-title").text("Level " + level);

	var n = Math.floor(Math.random()*4);
	var randomChosenColour = colSet[n];
	gamePattern.push(randomChosenColour);
	$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeIn(100);

	playSound(randomChosenColour);
}

// To check for button pressed
$('.btn').click(function () {

	var userColourChoice = $(this).attr("id");
  userClickedPattern.push(userColourChoice);

  playSound(userColourChoice);
  animatePress(userColourChoice);

  checkAnswer(userClickedPattern.length-1);
});

// To check answer
function checkAnswer(currentLevel) {
	if(userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
		if(userClickedPattern.length == gamePattern.length) {
			setTimeout(function () {
          nextSequence();
        }, 1000);
		}
	}
	else {
		playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
	}
}

// ANIMATIONS

// To play sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// To animate keypress
function animatePress(currentColor) {
  $("#"+currentColor).addClass("pressed");
  setTimeout(function () {
    $("#"+currentColor).removeClass("pressed");
  }, 100);
}
