const GRIDDIMENSION = 16;

const grid = document.querySelector('.grid');

const row = document.createElement('div');
row.classList.add('row');

const square = document.createElement('div');
square.classList.add('square');

// Add squares to row
let clonedSquare;
for (let i = 0; i < GRIDDIMENSION; i++) {
  clonedSquare = square.cloneNode(true);
  row.appendChild(clonedSquare);
}

// Add row to grid
let clonedRow;
for (let i= 0; i < GRIDDIMENSION; i++) {
  clonedRow = row.cloneNode(true);
  grid.appendChild(clonedRow);
}

// Change square color when hovering
const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseenter', (e) => {
  console.log(e.target);
  e.target.style.backgroundColor = "darkblue";
}));
