function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl=document.getElementById('boxes');
const controlsEl = document.getElementById("controls");
const inputEl = controlsEl.querySelector('input[type=number]');
const createBtn = document.querySelector('#controls button[data-create');
const destroyBtn = document.querySelector('#controls button[data-destroy');

createBtn.addEventListener("click", createBoxes)
destroyBtn.addEventListener("click", destroyBoxes)

function destroyBoxes(event){
  boxesEl.innerHTML='';
  inputEl.value = '';
}



function createBoxes(event){
  let markup="";
  const newBoxesList = [];
  if(inputEl.value!==null){
    for (let i = 0; i < inputEl.value; i++){
      markup+=`<div style="background-color: ${getRandomHexColor()}"></div>`;
    }}

    boxesEl.insertAdjacentHTML('afterbegin',markup);
  
    const arr = [...boxesEl.children];
    arr.forEach((div,index)=>{
    div.style.width=`${30+10*(index+1)}px`;
    div.style.height=`${30+10*(index+1)}px`;
console.log(div);
    }
    );  
  
  
  
  
  
  
  
  };


