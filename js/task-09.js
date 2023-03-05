function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const textEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");
const buttonEl = bodyEl.querySelector("button");

buttonEl.addEventListener("click", handleColorChange);

function handleColorChange(event){
  const currentCol = getRandomHexColor();
  bodyEl.style.backgroundColor=currentCol;
  textEl.textContent = currentCol;
};