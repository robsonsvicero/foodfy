const formDelete = document.querySelector("#form-delete");
formDelete.addEventListener("submit", function (event) {
  const confirmation = confirm("Quer mesmo deletar?");

  if (!confirmation) {
    event.preventDefault();
  }
});
