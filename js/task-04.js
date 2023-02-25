let counterValue = 0;
const counterEl = document.querySelector('#value');
const counterMinus = document.querySelector('button [data-action="decrement"]');



const add = document.querySelector('[data-action="increment"]');
add.addEventListener('click',()=>{
    counterValue++;
    counterEl.textContent=counterValue;
});


const minus = document.querySelector('[data-action="decrement"]');
minus.addEventListener('click',()=>{
    counterValue--;
    counterEl.textContent=counterValue;
});