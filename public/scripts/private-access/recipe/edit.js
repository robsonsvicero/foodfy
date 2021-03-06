function addIngredient() {
  const ingredients = document.querySelector(".ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");

  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  if (newField.children[0].value == "") return false;
  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document
  .querySelector(".add-ingredient")
  .addEventListener("click", addIngredient);

function addStep() {
  const steps = document.querySelector(".steps");
  const fieldContainer = document.querySelectorAll(".step");

  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  if (newField.children[0].value == "") return false;

  newField.children[0].value = "";
  steps.appendChild(newField);
}

document.querySelector(".add-step").addEventListener("click", addStep);

const formDelete = document.querySelector("#form-delete");
formDelete.addEventListener("submit", function (event) {
  const confirmation = confirm("Quer mesmo deletar?");

  if (!confirmation) {
    event.preventDefault();
  }
});
