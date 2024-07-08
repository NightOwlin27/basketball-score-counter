let homeScore = document.getElementById("homescore");
let guestScore = document.getElementById('guestscore');
let reset = document.getElementsByClassName('reset');

let home = 0;
let guest = 0;

function incrementOne(team) {
  if (team === 'home') {
      home+= 1;
      homeScore.textContent = home;
    } else if (team === 'guest') {
      guest+= 1;
      guestScore.textContent = guest;
    }
}

function incrementTwo(team) {
  if (team === 'home') {
      home+= 2;
      homeScore.textContent = home;
    } else if (team === 'guest') {
      guest+= 2;
      guestScore.textContent = guest;
    }
}

function incrementThree(team) {
  if (team === 'home') {
      home+= 3;
      homeScore.textContent = home;
    } else if (team === 'guest') {
      guest+= 3;
      guestScore.textContent = guest;
    }
}

function resetScore () {
  guestScore.textContent = guest - guest;
  homeScore.textContent = home - home;
  home = 0;
  guest = 0;
}