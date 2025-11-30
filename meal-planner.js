const inputs = document.querySelectorAll("textarea");
const resetButton = document.getElementById("reset");
const generateButton = document.getElementById("generate");

const meals = {
  pdj: ["Céréales", "Pain grillé", "Omelette", "Yaourt", "Smoothie"],
  dej: ["Salade", "Poulet rôti", "Pâtes", "Sandwich", "Quiche"],
  din: ["Soupe", "Pizza", "Poisson grillé", "Riz sauté", "Boeuf aux légumes"]
};

function saveData() {
  const data = {};
  inputs.forEach(input => {
    const key = input.dataset.day + "-" + input.dataset.meal;
    data[key] = input.value;
  });
  localStorage.setItem("meals", JSON.stringify(data));
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("meals")) || {};
  inputs.forEach(input => {
    const key = input.dataset.day + "-" + input.dataset.meal;
    input.value = data[key] || "";
  });
}

function generateRandomMeals() {
  inputs.forEach(input => {
    const mealType = input.dataset.meal;
    const randomMeal = meals[mealType][Math.floor(Math.random() * meals[mealType].length)];
    input.value = randomMeal;
  });
  saveData();
}

inputs.forEach(input => input.addEventListener("input", saveData));
resetButton.addEventListener("click", () => {
  localStorage.removeItem("meals");
  inputs.forEach(i => i.value = "");
});
generateButton.addEventListener("click", generateRandomMeals);

loadData();