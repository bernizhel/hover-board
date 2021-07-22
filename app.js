const board = document.querySelector('#board');
// const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES_NUMBER = 500;
const DEFAULT_COLOR = '#1d1d1d';
const DEFAULT_SHADOW = '0 0 2px #000';

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);
  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor()
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = DEFAULT_COLOR;
  element.style.boxShadow = DEFAULT_SHADOW;
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
