const GRIDDIMENSION = 16;

const grid = document.querySelector('.grid');

const row = document.createElement('div');
row.classList.add('row');
const square = document.createElement('div');
square.classList.add('square');

let clonedSquare;
for (let i = 0; i < GRIDDIMENSION; i++) {
  clonedSquare = square.cloneNode(true);
  row.appendChild(clonedSquare);
}

let clonedRow;
for (let i= 0; i < GRIDDIMENSION; i++) {
  clonedRow = row.cloneNode(true);
  grid.appendChild(clonedRow);
}
