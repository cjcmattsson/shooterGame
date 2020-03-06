let targets = document.querySelectorAll('.target');
let board = document.querySelector('.board');
let hits = 0;
let counter = document.querySelector('.counter');

function createTarget() {
  let target = document.createElement('div');
  target.setAttribute('class', 'target');
  target.setAttribute('onclick', 'hit(event)');
  board.appendChild(target);
}

function hit(e) {
  console.log(e.target);
  e.target.parentNode.removeChild(e.target);
  hits ++;
  counter.innerHTML = hits;
}

setInterval(function(){
  createTarget();
}, 3000)
