const slider = document.querySelector('.slider');
let gridDimension = slider.value;

// Draw new grid if user changes size through slider
slider.addEventListener('change', e => {
  // console.log(e.target.value);
  gridDimension = e.target.value;
  removeAllChildNodes(grid);
  drawGrid(gridDimension, mainColor);
});

const header = document.querySelector('.header');
const displayDimension = document.querySelector('.grid-value');
const grid = document.querySelector('.grid');
const controls = document.querySelectorAll('.controls');

// Set default color to green
let mainColor = 'rgb(0, 187, 0)';

// Change color to blue
const colorBlue = document.querySelector('button[data-color="blue"]');
colorBlue.addEventListener('click', e => {
  if(mainColor == 'blue') return;
  mainColor = 'blue';
  removeAllChildNodes(grid);
  drawGrid(gridDimension, mainColor);

  changeColor(mainColor);
});

// Change color to green
const colorGreen = document.querySelector('button[data-color="green"]');
colorGreen.addEventListener('click', e => {
  if(mainColor == 'rgb(0, 187, 0)') return;
  mainColor = 'rgb(0, 187, 0)';
  removeAllChildNodes(grid);
  drawGrid(gridDimension, mainColor);
});

// Draw grid
drawGrid(gridDimension, mainColor);

function drawGrid(dimension, color) {
  // Display grid dimension
  displayDimension.innerHTML = `${dimension} x ${dimension}`;

  // Create new div with class row
  let row = document.createElement('div');
  row.classList.add('row');
  
  // Create new div with class square
  let square = document.createElement('div');
  square.classList.add('square');

  // Change page's color
  let newColor;
  if (color == 'blue') {
    newColor = 'lightblue';
  } else if (color == 'rgb(0, 187, 0)') {
    newColor = 'rgb(189, 230, 173)';
  }
  square.style.backgroundColor = header.style.backgroundColor = newColor;
  controls.forEach(div => div.style.backgroundColor = newColor);

  // Add squares to row
  let clonedSquare;
  for (let i = 0; i < dimension; i++) {
    clonedSquare = square.cloneNode(true);
    row.appendChild(clonedSquare);
  }

  // Add row to grid
  let clonedRow;
  for (let i= 0; i < dimension; i++) {
    clonedRow = row.cloneNode(true);
    grid.appendChild(clonedRow);
  }

  // Change square color when hovering
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = color;
  }));
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
