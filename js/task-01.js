const items = document.querySelectorAll('li.item');
console.log(`Number of caterogies : ${items.length}`);

items.forEach(element => {
    const itemTitle = element.querySelector('h2');
    const itemEntries = element.querySelectorAll('li');
    console.log(`Title of category : ${itemTitle.textContent}`);
    console.log(`Entries in category : ${itemEntries.length}`);
});
