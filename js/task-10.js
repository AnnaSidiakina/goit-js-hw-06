function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
};

// let amount = 0;
// refs.input.addEventListener("click", (event) => {
//   return (amount = refs.input.value);
//   // console.log(amount);
// });

refs.divBoxes.className = "boxes";

refs.btnCreate.addEventListener("click", onCreateBtnClick);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function onCreateBtnClick() {
  destroyBoxes();
  createBoxes(refs.input.value);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.className = "boxes__item";
    divEl.style.backgroundColor = getRandomHexColor();

    let size = 30 + i * 10;

    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;

    refs.divBoxes.insertAdjacentElement("beforeend", divEl);
  }
}

function destroyBoxes() {
  refs.divBoxes.textContent = "";
}
