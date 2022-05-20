const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById('ingredients')

const makeListofIngredients = ingredients.forEach(ingredient => {

  const myEl = document.createElement('li');
  myEl.textContent = ingredient;
  myEl.classList.add('item');

  ulEl.appendChild(myEl)
})

