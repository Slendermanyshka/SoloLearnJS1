function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.getElementById("controls");
const inputEl = controlsEl.querySelector('input[type=number]');
const createBtn = document.querySelector('#controls button[data-create');
const destroyBtn = document.querySelector('#controls button[data-destroy');

createBtn.addEventListener("click", createBoxes)
destroyBtn.addEventListener("click", destroyBoxes)

function destroyBoxes(event){

}



function createBoxes(event){
  const newBoxesList = [];
  if(inputEl.value!==null){
    for (let i = 0; i < inputEl.value; i++){
      newBoxesList.push(getRandomHexColor());
  }}
}

