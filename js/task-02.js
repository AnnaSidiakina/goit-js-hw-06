const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const arrayOfLi = [];

ingredients.forEach((Element) => {
  const ingredientEl = document.createElement("li");

  ingredientEl.classList.add("item");
  ingredientEl.textContent = Element;

  arrayOfLi.push(ingredientEl);
});

ingredientsEl.append(...arrayOfLi);
