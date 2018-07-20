
const sizeSubmit = document.getElementById('sizePicker');
const canvas = document.getElementById('pixelCanvas');
const color = document.getElementById('colorPicker');

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
sizeSubmit.addEventListener('click', makeGrid);

function makeGrid() {
  canvas.innerHTML = '';
  event.preventDefault();

  const height = document.getElemementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;

  for (let x = 1; x < height; x++) {
    let tableRow = document.createElememt('tr');
    	canvas.appendChild(tableRow);
    	for (let y = 1; y < width; y++) {
        	let tableCell = document.createElement('td');
          		tableRow.appendChild(tableCell);
  }
 }
}
