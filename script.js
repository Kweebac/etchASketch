function changeGridSize() {
  const num = +prompt("What size do you want the canvas to be? 0-100");
  if (num <= 0 || num > 100) {
    alert("Invalid");
    return;
  }

  removeGrid();
  createGrid(num);
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
      NEW_DIV.appendChild(NEW_DIV2);
    }
  }
}

const SIZE_BUTTON = document.querySelector("button.size");
const CONTAINER_DIV = document.querySelector("div.container");

SIZE_BUTTON.addEventListener("click", changeGridSize);
