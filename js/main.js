
// VARIABLES ////////////////////

var winLose = ["./paper.jpg", "./tiny_scissor.jpg", "./pebble.jpg"];
var peb = document.getElementById("peb");
var pap = document.getElementById("pap");
var sci = document.getElementById("sci");
var textInsert = document.getElementById("text-insert");

// PEBBLE ////////////////////

peb.addEventListener("click", function(){

  randpeb = winLose[Math.floor(Math.random()*winLose.length)];

  if(randpeb === "./paper.jpg"){
    peb.src = "./wrapped-rock.jpg";
    textInsert.innerHTML = "You have been CAPTURED! Try again???";
    textInsert.style.color = "#ff5577";
  }
  else if(randpeb === "./tiny_scissor.jpg"){
    peb.src = "./bent_scissor.png";
    textInsert.innerHTML = "You friggin DESTROYED your apponent's scissors... wanna do it again??";
    textInsert.style.color = "#77ff55";
  }
  else{
    peb.src = "./broken_rock.jpg";
    textInsert.innerHTML = "You and your apponent chose the same weapon, then simultaneously attacked each other demolishing into a pile of GRAVEL, nobody won this battle... Try Again?";
    textInsert.style.color = "#5577ff";
  }
});

// PAPER ////////////////////

pap.addEventListener("click", function(){

  randpap = winLose[Math.floor(Math.random()*winLose.length)];

  if(randpap === "./pebble.jpg"){
    pap.src = "./wrapped-rock.jpg";
    textInsert.innerHTML = "Good Work, S.C.P.-rock17 has been captured. Play Again?";
    textInsert.style.color = "#77ff55";
  }
  else if(randpap === "./tiny_scissor.jpg"){
    pap.src = "./ripped_paper.jpg";
    textInsert.innerHTML = "You have been shredded, and as the wind blows, you go with it.. turning into the wind yourself... Play Again?";
    textInsert.style.color = "#ff5577";
  }
  else{
    pap.src = "./paper_crane.jpg";
    textInsert.innerHTML = "You and your apponent becames best friends and made each other cranes. Try Again?";
    textInsert.style.color = "#5577ff";
  }
});

//SCISSORS ////////////////////

sci.addEventListener("click", function(){

  randSci = winLose[Math.floor(Math.random()*winLose.length)];

  if(randSci === "./paper.jpg"){
    sci.src = "./ripped_paper.jpg";
    textInsert.innerHTML = "Good job, your apponent's paper has been SHREDDED to its end. Do It Again?";
    textInsert.style.color = "#77ff55";
    
  }
  else if(randSci === "./pebble.jpg"){
    sci.src = "./bent_scissor.png";
    textInsert.innerHTML = "Your scissors got friggin BENT... wanna Try again??";
    textInsert.style.color = "#ff5577";
  }
  else{
    sci.src = "./two_scissor.png";
    textInsert.innerHTML = " um.... Try Again?";
    textInsert.style.color = "#5577ff";
  }
});

// PLAY AGAIN BUTTON ////////////////////
var playAgain = document.getElementById("play-again");

playAgain.addEventListener("click", function(){
  peb.src = "./pebble.jpg"
  sci.src = "./tiny_scissor.jpg"
  pap.src = "./paper.jpg"
  textInsert.innerHTML = " "
})
