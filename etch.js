const slider = document.querySelector('.slider');
let gridDimension = slider.value;

const grid = document.querySelector('.grid');

// Draw initial grid
drawGrid(gridDimension);

// Draw new grid if user changes size through slider
slider.addEventListener('change', e => {
  // console.log(e.target.value);
  removeAllChildNodes(grid);
  drawGrid(e.target.value);
});

function drawGrid(dimension) {
  // Create new div with class row
  let row = document.createElement('div');
  row.classList.add('row');
  
  // Create new div with class square
  let square = document.createElement('div');
  square.classList.add('square');

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
    e.target.style.backgroundColor = "rgb(0, 187, 0)";
  }));
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
