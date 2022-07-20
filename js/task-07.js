const input = document.querySelector("#font-size-control");
let output = document.querySelector("#text");

input.addEventListener("input", function () {
  const inputValue = input.value;
  output.style.fontSize = `${inputValue}px`;
});
