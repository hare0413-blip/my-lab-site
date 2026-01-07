const btn = document.getElementById("btn");
const resetBtn = document.getElementById("resetBtn");
const count = document.getElementById("count");
const message = document.getElementById("message");

let number = 0;

btn.addEventListener("click", () => {
  number++;
  count.textContent = number;

  if (number === 10) {
    message.textContent = "🎉 10回達成！";
  }
});

resetBtn.addEventListener("click", () => {
  number = 0;
  count.textContent = number;
  message.textContent = "";
});
