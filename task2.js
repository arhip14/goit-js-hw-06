const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const newListItem = document.createElement("li");
  newListItem.textContent = ingredient;
  newListItem.classList.add("item");
  ingredientsList.appendChild(newListItem);
});
