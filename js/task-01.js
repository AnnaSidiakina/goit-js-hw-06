const amountOfItems = document.querySelectorAll(".item");

console.log("Number of categories: ", amountOfItems.length);

const categories = amountOfItems.forEach((element) => {
  const titleEl = element.querySelector("h2");
  const numberOfItems = element.querySelectorAll("li").length;

  console.log("Category: ", titleEl.textContent);
  console.log("Elements: ", numberOfItems);
});
