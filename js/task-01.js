const liItemsEl = document.querySelectorAll(`li.item`);

console.log(`Number of categories: ${liItemsEl.length}`);

const ullistEl = document.querySelectorAll('#categories>li');

 ullistEl.forEach(el => {
     console.log(`Category: ${el.firstElementChild.textContent}`)
     console.log(`Elements: ${el.lastElementChild.children.length }`);
});
    

    






