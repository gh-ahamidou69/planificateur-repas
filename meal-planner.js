const inputs = document.querySelectorAll("textarea");


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


inputs.forEach(input => {
input.addEventListener("input", saveData);
});


loadData();


document.getElementById("reset").addEventListener("click", () => {
localStorage.removeItem("meals");
inputs.forEach(i => (i.value = ""));
});