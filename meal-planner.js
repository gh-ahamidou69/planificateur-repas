const inputs = document.querySelectorAll("textarea");


function saveData() {
const data = {};
inputs.forEach(input => {
const key = input.dataset.day + "-" + input.dataset.meal;
data[key] = input.value;
});
localStorage.setItem("meals", JSON.stringify(data));
}