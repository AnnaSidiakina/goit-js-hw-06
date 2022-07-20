const textInput = document.querySelector("#validation-input");
const rightLength = textInput.getAttribute("data-length");

function onInputBlur(event) {
  if (event.target.value.length === Number(rightLength)) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
}

textInput.addEventListener("blur", onInputBlur);
