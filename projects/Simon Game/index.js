
const buttonColors = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];

const redAudio = new Audio('sounds/red.mp3');
const blueAudio = new Audio('sounds/blue.mp3');
const greenAudio = new Audio('sounds/green.mp3');
const yellowAudio = new Audio('sounds/yellow.mp3');

let userClickedPattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    if (randomChosenColor == 'red') {
        $('#red').fadeOut(150).fadeIn(150);
        redAudio.play();
    } else if (randomChosenColor == 'blue') {
        $('#blue').fadeOut(150).fadeIn(150);
        blueAudio.play();
    } else if (randomChosenColor == 'green') {
        $('#green').fadeOut(150).fadeIn(150);
        greenAudio.play();
    } else if (randomChosenColor == 'yellow') {
        $('#yellow').fadeOut(150).fadeIn(150);
        yellowAudio.play();
    }
    return gamePattern;
}

$('.block').on('click', function(event){
    let userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
})







$('.block').on('click', function(){
    $(this).animate({opacity: 0.5}, 100);
    $(this).animate({opacity: 1}, 100);
});
















/*

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


*/