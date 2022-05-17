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

const colorBlue = document.querySelector('button[data-color="blue"]');
const colorGreen = document.querySelector('button[data-color="green"]');
const colorRainbow = document.querySelector('button[data-color="rainbow"]');
const eraser = document.querySelector('.eraser');

// Set default color to green
let mainColor = 'rgb(189, 230, 173)';

// Clear grid
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
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
  square.style.backgroundColor = header.style.backgroundColor = color;
  controls.forEach(div => div.style.backgroundColor = color);

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
  let newColor = 'blue';
  let random = false;
  let colors;
  if (color == 'lightblue') {
    newColor = 'blue';
  } else if (color == 'rgb(189, 230, 173)') {
    newColor = 'rgb(0, 187, 0)';
  } else {
    random = true;
    colors = ['blue', 'red', 'yellow', 'green', 'orange', 'purple', 'pink'];
  }
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseenter', colorable, { once: true }));
  function colorable(e) {
    if (random === true) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    e.target.style.backgroundColor = newColor;
  }

  // Eraser mode
  eraser.addEventListener('click', removeColor);
  let eraserMode;
  function removeColor() {
    if (eraserMode) return;
    squares.forEach(square => square.removeEventListener('mouseenter', colorable));
    squares.forEach(square => square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = mainColor;
    }, { once: true }));
    eraserMode = true;
  }

  // Event listeners for color buttons
  //
  colorBlue.addEventListener('click', () => {
    if(mainColor == 'lightblue') {
      if (eraserMode === true) {
        exitEraserMode();
      }
      return;
    }
    mainColor = 'lightblue';
    removeAllChildNodes(grid);
    drawGrid(gridDimension, mainColor);
  });

  colorGreen.addEventListener('click', () => {
    if(mainColor == 'rgb(189, 230, 173)') {
      if (eraserMode === true) {
        exitEraserMode();
      }
      return;
    }
    mainColor = 'rgb(189, 230, 173)';
    removeAllChildNodes(grid);
    drawGrid(gridDimension, mainColor);
  });

  colorRainbow.addEventListener('click', () => {
    if(mainColor == 'lightgrey') {
      if (eraserMode === true) {
        exitEraserMode();
      }
      return;
    }
    mainColor = 'lightgrey';
    removeAllChildNodes(grid);
    drawGrid(gridDimension, mainColor);
  });

  function exitEraserMode() {
    squares.forEach(square => square.removeEventListener('mouseenter', removeColor));
    squares.forEach(square => square.addEventListener('mouseenter', colorable, { once: true }));
    eraserMode = false;
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
