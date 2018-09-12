let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll() {
  document.querySelector("#dice").innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
  }
  report();
}

roll();

//////////////////////////////////////////////////////
// Add code here that uses loops and conditional statements
// to determine if any of the following cases are true:
//
function report() {
  var pairs = 0;
  var singlePair = 0;
  var threes = 0;
  var singleThree = 0;
  var one = 0;
  var two = 0;
  var three = 0;
  var four = 0;
  var five = 0;
  var six = 0;

  document.querySelector("#report").innerHTML = ""; // clear out the report box
  let diceHtml = document.querySelectorAll('.die'); // this puts all the individual die HTML elements in diceHtml
  for (let dieVal = 1; dieVal < 7; dieVal++) {  // we set up a nested loop, first we check for all the 1s, then 2s, etc
    let howManyDice = 0; // we zero out our counter
    for (let i = 0; i < 5; i++) {  // we create the inner loop that cycles through the rolled dice
      if (dieVal === Number(diceHtml[i].getAttribute('data-roll'))) {  // we check if the rolled die is equal to the one's we're counting
        howManyDice++; // if so, we add one to the count
      }
    }
    if (howManyDice === 1) {
      if (dieVal === 1) {
        one = 1;
      }
      if (dieVal === 2) {
        two = 1;
      }
      if (dieVal === 3) {
        three = 1;
      }
      if (dieVal === 4) {
        four = 1;
      }
      if (dieVal === 5) {
        five = 1;
      }
      if (dieVal === 6) {
        six = 1;
      }
    }

    if (howManyDice === 2){
      pairs++;
    }

    if (howManyDice === 3){
      threes++;
    }

    if (pairs === 1 && singlePair === 0) {
      singlePair = dieVal;
    }

    if (threes === 1 && singleThree === 0) {
      singleThree = dieVal;
    }

    else if (howManyDice === 4){
      document.getElementById("report").innerHTML += "there are 4 " + dieVal + "s<br>";
    } else if (howManyDice === 5){
      document.getElementById("report").innerHTML += "Lil Yachty!<br>";
    }
  }

  if (pairs < 2 && singlePair > 0 && threes === 0) {
    document.getElementById("report").innerHTML +=
      "There are a pair of " + singlePair + "s<br>";
  } else if (threes < 2 && singleThree > 0 && pairs === 0) {
    document.getElementById("report").innerHTML +=
      "There are a three " + singleThree + "s<br>";
  }

  if (one === 1 && two === 1 && three === 1 && four === 1 && five === 1) {
    document.getElementById("report").innerHTML += "Small-Straight!<br>";
  } else if (two === 1 && three === 1 && four === 1 && five === 1 && six === 1) {
    document.getElementById("report").innerHTML += "Big-Straight!<br>";
  } else if (pairs === 1 && threes === 1) {
    document.getElementById("report").innerHTML += "Full House! <br>";
  } else if (pairs === 2) {
    document.getElementById("report").innerHTML += "Two Pair!<br>";
  }

// two of dice have the same points, like 3 6 5 6 1 - called pair: example solved for you. Complete the other cases below:

// three of dice have the same points, like 2 4 5 4 4 - called three;
// four of dice have the same points, like 1 4 1 1 1 - called four;
// all five dice have the same points, like 2 2 2 2 2 - called yacht;
// two pairs at once, like 3 6 5 3 5 - called two-pairs;
// pair and three at once, like 1 6 6 1 6 - called full-house;
// sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
// sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.
}

//
// report the results in the div with the ID 'report'.
report();
