var fortunelist = ["You'll die", "He's coming", "Enjoy it now", "Bye bye"];

function hello() {
  Math.floor((Math.random()fortunelist.length));
  document.getElementById('fortune-cookie-text').innerHTML = fortunelist[0];
}

