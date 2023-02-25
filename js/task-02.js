const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');

const newList = ingredients.map(ingridient=>{

  const ingridientLiEl = document.createElement('li');
  ingridientLiEl.classList.add('item');
  
  ingridientLiEl.textContent=ingridient;

return ingridientLiEl;
});

listEl.append(...newList);