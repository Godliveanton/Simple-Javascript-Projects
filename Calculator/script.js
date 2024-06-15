"use strict";

const buttons = document.getElementsByTagName("button");
const display = document.getElementById("display");
let num1, num2, res, operator;

const arithmeticButtons = ["+", "-", "*", "/", "="];

// for operator's operations
const operations = (oper) => {
  if (num2) {
    switch (oper) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num1 / num2;
        break;
    }
    display.value = res;
  }
};

// callback function for button onClick event handling
const onClickHandler = (e) => {
  if (arithmeticButtons.includes(e.target.innerText)) {
    if (operator) {
      num2 = Number(display.value);
      operations(operator);
      num1 = res;
      num2 = "";
      if (e.target.innerText !== "=") {
        operator = e.target.innerText;
        display.value = "";
      } else {
        operator = "";
      }
    } else {
      operator = e.target.innerText;
      if (!num1) {
        num1 = display.value !== "" ? Number(display.value) : "";
      }
      display.value = "";
    }
  } else {
    display.value += e.target.innerText;
  }
};

// Event handlers for the buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", onClickHandler);
}
