let targets = document.querySelectorAll('.target');
let board = document.querySelector('.board');
let hits = 0;
let counter = document.querySelector('.counter');

function random(min, max) {
  return min + Math.random() * (max - min);
}

function createTarget() {
  let target = document.createElement('div');
  let hitZone = document.createElement('div');
  target.setAttribute('class', 'target');
  hitZone.setAttribute('class', 'hitZone');
  hitZone.appendChild(target);
  hitZone.onclick = hit;
  hitZone.style.top = random((board.offsetHeight - 0), (board.offsetHeight - 450)) + "px";
  board.appendChild(hitZone);
}

function hit() {
  this.remove();
  hits ++;
  counter.innerHTML = hits;
}

setInterval(function(){
  createTarget();
}, 1000)
