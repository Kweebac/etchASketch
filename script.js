function changeGridSize() {
  temp = +prompt("What size do you want the canvas to be? 0-100");
  if (temp <= 0 || temp > 100) {
    alert("Invalid");
    return;
  } else {
    currentSize = temp;
  }

  removeGrid();
  createGrid(currentSize);
}

function removeGrid() {
  const count = CONTAINER_DIV.childElementCount;
  for (let i = 0; i < count; i++) {
    CONTAINER_DIV.removeChild(document.querySelector(".container div"));
  }
}

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const NEW_DIV = document.createElement("div");
    CONTAINER_DIV.appendChild(NEW_DIV);

    for (let j = 0; j < num; j++) {
      const NEW_DIV2 = document.createElement("div");
      NEW_DIV2.addEventListener("mouseenter", () => {
        NEW_DIV2.style.backgroundColor = `${color}`;
      });
      NEW_DIV.appendChild(NEW_DIV2);
    }
  }
}

const SIZE_BUTTON = document.querySelector("button.size");
const COLOR_INPUT = document.querySelector("input");
const CONTAINER_DIV = document.querySelector("div.container");
const RESET_BUTTON = document.querySelector("button.reset");
let color = "black";
let currentSize = 16;

SIZE_BUTTON.addEventListener("click", changeGridSize);
RESET_BUTTON.addEventListener("click", () => {
  removeGrid();
  createGrid(currentSize);
});
COLOR_INPUT.addEventListener("input", (event) => (color = `${event.target.value}`));

createGrid(32);
