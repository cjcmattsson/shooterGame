let targets = document.querySelectorAll('.target');
let board = document.querySelector('.board');
let hits = 0;
let counter = document.querySelector('.counter');

let startButton = document.querySelector('.starter .start-message button');
let startScreen = document.querySelector('.starter');

let direction = ['left', 'right'];
let object = ['dragon', 'bottle'];

function random(min, max) {
  return min + Math.random() * (max - min);
}

function createTarget() {
  let target = document.createElement('div');
  let hitZone = document.createElement('div');
  target.classList.add('target');
  target.classList.add(object [Math.floor(Math.random() * object .length)]);
  hitZone.setAttribute('class', 'hitZone');
  hitZone.classList.add(direction[Math.floor(Math.random() * direction.length)])
  hitZone.appendChild(target);
  hitZone.onclick = hit;
  hitZone.style.top = random((board.offsetHeight - 100), (board.offsetHeight - 450)) + "px";
  board.appendChild(hitZone);
}

function hit() {
  this.remove();
  hits ++;
  counter.innerHTML = hits;
}

function startGame() {
  startScreen.classList.add('gameStarted');
  setInterval(function(){
    createTarget();
  }, 1000)
}

startButton.addEventListener('click', startGame);
