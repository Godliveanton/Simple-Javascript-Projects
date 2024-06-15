"use strict";

const simpleButton = document.getElementById("simple");
const hexButton = document.getElementById("hex");
const colorChange = document.getElementById("colorChange");
const colorChangeButton = document.getElementById("clickColorChange");
const colorText = document.getElementById("colorText");
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let mode = "simple";

//Callback Functions

//Callback for Simple and Hex Buttons
const modeSelector = (e) => {
  mode = e.target.id;
};

// Generate a random hex color
const getRandomHexColor = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  return hexColor;
};

//Callback for Click Me Button
const colorChanger = () => {
  if (mode === "simple") {
    const currentIndex = colors.indexOf(colorText.textContent);
    const nextIndex = (currentIndex + 1) % colors.length;
    colorChange.style.backgroundColor = colors[nextIndex];
    colorText.textContent = colors[nextIndex];
  } else if (mode === "hex") {
    const hexColor = getRandomHexColor();
    colorChange.style.backgroundColor = hexColor;
    colorText.textContent = hexColor;
  }
};

//Event Handlers
simpleButton.addEventListener("click", modeSelector);

hexButton.addEventListener("click", modeSelector);

colorChangeButton.addEventListener("click", colorChanger);
