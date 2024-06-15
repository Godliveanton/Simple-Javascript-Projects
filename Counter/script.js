"use strict";

const counterValue = document.getElementById("counterValue");
const buttons = document.getElementsByTagName("button");
let count = 0;
console.log(counterValue.classList.contains("counter-value"));

//This is the combination of adding and removing classes and count value set to counterValue
const updateCounter = (count) => {
  counterValue.classList.remove(
    "counter-increase",
    "counter-decrease",
    "counter-reset"
  );
  counterValue.classList.add(
    count === 0
      ? "counter-reset"
      : count > 0
      ? "counter-increase"
      : "counter-decrease"
  );

  counterValue.textContent = count;
};

//Callback function to handle click event on the buttons
const counterChange = (e) => {
  count =
    e.target.id === "reset"
      ? 0
      : count + Number(e.target.getAttribute("data-info"));

  updateCounter(count);

  console.log(count);
};

//adding the click event listener to the buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", counterChange);
}
