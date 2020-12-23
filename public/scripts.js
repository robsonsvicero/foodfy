const cards = document.querySelectorAll('.card');

for (const card of cards) {
  card.addEventListener("click", function() {
    const siteId = card.getAttribute("id")
    window.location.href = `/recipe/${siteId}`
  })
}

const content = document.querySelectorAll('.recipe-wrapper .content');
const buttons = document.querySelectorAll('.button');


for (let [i, button] of buttons.entries()) {
  button.addEventListener("click", function() {
    if (content[i].classList.contains('show')) {
      content[i].classList.remove("show")
      content[i].classList.add("hide")
      button.innerHTML = 'MOSTRAR'
    } else {
      content[i].classList.add("show")
      content[i].classList.remove("hide")
      button.innerHTML = 'ESCONDER'
    }
  })
}

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