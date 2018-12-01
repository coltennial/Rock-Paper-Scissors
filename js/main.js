// ROCK PAPER SCISSORS

var winLose = ["./paper.jpg", "./tiny_scissor.jpg", "./pebble.jpg"];

var peb = document.getElementById("peb");

peb.addEventListener("click", function(){

  randpeb = winLose[Math.floor(Math.random()*winLose.length)];

  if(randpeb === "./paper.jpg"){
    peb.src = "./wrapped-rock.jpg";
    document.getElementById('text-insert').innerHTML = "You have been CAPTURED! Try again???";
  }
  else if(randpeb === "./tiny_scissor.jpg"){
    peb.src = "./bent_scissor.png";
    document.getElementById('text-insert').innerHTML = "You friggin DESTROYED your apponent's scissors... wanna do it again??";
  }
  else{
    peb.src = "./broken_rock.jpg";
    document.getElementById('text-insert').innerHTML = "You and your apponent chose the same weapon, then simultaneously attacked each other demolishing into a pile of GRAVEL,nobody won this battle... Try Again?";
  }
});

//////////////////////////////////////////////////

var sci = document.getElementById("sci");

sci.addEventListener("click", function(){

  randSci = winLose[Math.floor(Math.random()*winLose.length)];

  if(randSci === "./paper.jpg"){
    sci.src = "./ripped_paper.jpg";
    document.getElementById('text-insert').innerHTML = "Good job, your apponent's paper has been SHREDDED to its end. Do It Again?";
  }
  else if(randSci === "./pebble.jpg"){
    sci.src = "./bent_scissor.png";
    document.getElementById('text-insert').innerHTML = "Your scissors got friggin BENT... wanna Try again??";
  }
  else{
    sci.src = "./two_scissor.png";
    document.getElementById('text-insert').innerHTML = " um.... Try Again?";
  }
});

//////////////////////////////////////////////////

var pap = document.getElementById("pap");

pap.addEventListener("click", function(){

  randpap = winLose[Math.floor(Math.random()*winLose.length)];

  if(randpap === "./pebble.jpg"){
    pap.src = "./wrapped-rock.jpg";
    document.getElementById('text-insert').innerHTML = "Good Work, S.C.P.-rock17 has been captured. Play Again?";
  }
  else if(randpap === "./tiny_scissor.jpg"){
    pap.src = "./ripped_paper.jpg";
    document.getElementById('text-insert').innerHTML = "You have been shredded, and as the wind blows, you go with it.. turning into the wind yourself... Play Again?";
  }
  else{
    pap.src = "./paper_crane.jpg";
    document.getElementById('text-insert').innerHTML = "You and your apponent becames best friends and made each other cranes. Try Again?";
  }
});
