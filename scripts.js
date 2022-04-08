function createPixel(pixelSize) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.height = `${pixelSize}px`;
  pixel.style.width = `${pixelSize}px`;
  pixel.style.backgroundColor = "rgba(0,0,0,0)";
  pixel.addEventListener("mouseover", stylePixel);
  return pixel;
}

function stylePixel(e) {
  let target = e.target;
  let bgCol = target.style.backgroundColor;
  let alpha = parseFloat(bgCol.split(',')[3]);
   if (alpha < 1.0) {
    target.style.backgroundColor = `rgba(0,0,0,${alpha + 0.1})`;
   } else {
     target.removeEventListener("mouseover", stylePixel);
   }
}

function initializeBoard(gridSize) {
let pixelCount = gridSize * gridSize;
let pixelSize = 960 / gridSize;

  let board = document.querySelector("#board");

  for (let i = 0; i < pixelCount; i++) { 
    pixel = createPixel(pixelSize);
    board.appendChild(pixel);
  }
}

function clearBoard() {
  document.querySelectorAll(".pixel").forEach(e => e.remove());
}

let button = document.querySelector("button.reset");

button.addEventListener("click", () => {
  clearBoard();
  let newGridSize;

  do {
    newGridSize = prompt("Please enter number of squares per side for the new grid (up to 100).");
    newGridSize = parseInt(newGridSize);
    console.log(newGridSize, typeof newGridSize);    
  }
  while (!Number.isInteger(newGridSize) || newGridSize < 1 || newGridSize > 100)

  initializeBoard(newGridSize);
});

initializeBoard(16);