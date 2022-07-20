let counterValue = 0;

const targetBtn = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const onTargetBtnDecrement = () => {
  counterValue -= 1;
  targetBtn.textContent = counterValue;
};

const onTargetBtnIncrement = () => {
  counterValue += 1;
  targetBtn.textContent = counterValue;
};

decrementButton.addEventListener("click", onTargetBtnDecrement);
incrementButton.addEventListener("click", onTargetBtnIncrement);
