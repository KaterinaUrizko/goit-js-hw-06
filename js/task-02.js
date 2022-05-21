const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('#ingredients');

const makeListofIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const myEl = document.createElement('li');
    myEl.textContent = ingredient;
    myEl.classList.add('item');

    return myEl;
  });
};
  
const elements = makeListofIngredients(ingredients);
ulEl.append(...elements);


