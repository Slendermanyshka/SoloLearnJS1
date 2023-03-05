const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const listEl = document.querySelector('.gallery');

const newList = images.map((image)=>{
  const newImageEl = document.createElement('img');
  newImageEl.classList.add('imageEl');
  newImageEl.src=image.url;
  newImageEl.alt=image.alt;
const newItemEl = document.createElement('li');
newItemEl.appendChild(newImageEl);
newItemEl.classList.add('item');

return newItemEl;
});


listEl.append(...newList);

