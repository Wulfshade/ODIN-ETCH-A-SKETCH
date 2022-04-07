let gridSize = 16;
let pixelCount = gridSize * gridSize;
let pixelSize = 960 / gridSize;

function createPixel(pixelSize) {
  let pixel = document.createElement("div");
  pixel.style.height = `${pixelSize}px`;
  pixel.style.width = `${pixelSize}px`;
  pixel.addEventListener("mouseover",() => {
    pixel.style.backgroundColor = "black";
  }, { once: true });

  return pixel;
}

let board = document.querySelector("#board");

for (let i = 0; i < pixelCount; i++) { 
  pixel = createPixel(pixelSize);
  board.appendChild(pixel);
}
