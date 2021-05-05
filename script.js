let repeat = document.getElementById(`repeat`)
let submitButton = document.getElementById(`submitButton`)
let imageDiv = document.getElementById(`imageDiv`)

submitButton.addEventListener(`click`, repeatImage)

function repeatImage() {

  for (let i = 0; i < repeat.value; i++) {
    let image = document.createElement(`img`)
    image.src = `donkey-kong.png`
    image.style.width = `${i}px`

    imageDiv.appendChild(image)
  }

}