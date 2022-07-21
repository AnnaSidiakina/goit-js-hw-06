function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

buttonEl.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  bodyEl.setAttribute("style", `background-color: ${color} `);
  colorName.textContent = color;
});
