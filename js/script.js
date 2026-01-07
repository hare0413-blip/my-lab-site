const btn = document.getElementById("btn");
const count = document.getElementById("count");

let number = 0;

btn.addEventListener("click", () => {
  number++;
  count.textContent = number;
});
