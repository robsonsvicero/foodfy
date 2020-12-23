//ADICIONAR INGREDIENTES
function addIngredient(){
  const ingredient = document.querySelector('#ingredients')
  const fieldContainer = document.querySelectorAll('.ingredient')

  //CLONA O ÚLTIMO INGREDIENTE
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

  //CASO ÚLTIMO CAMPO ESTEJA VAZIO ELE NÃO ADICIONA
  if (newField.children[0].value == "") return false

  //MANTEM O INPUT VAZIO
  newField.children[0].value = ""
  ingredient.appendChild(newField)
}

document.querySelector('.add-ingredient').addEventListener('click', addIngredient)