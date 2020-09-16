console.log("INEFFABLE!")

const body = document.querySelector("body")

fetch("http://localhost:3000/characters")
  .then(res => res.json())
  .then(renderCharacters)

function renderCharacters(characters){
  const charactersList = document.createElement("div")
  body.appendChild(charactersList)
  charactersList.outerHTML = '<div class="characters-list">'
  characters.forEach(renderCharacter)
}

function renderCharacter(character){
  const charactersList = document.querySelector(".characters-list")
  const div = document.createElement("div")
  div.classList.add("character-card")
  div.innerHTML = `
    <img src="${character.image}" alt=${character.name}/>
    <p><strong>${character.name}</strong></p>
    <p>Ally: ${character.ally}</p>
    <p>Enemy: ${character.enemy}</p>
    <p>Played by ${character.actor}</p>
  `
  const like = document.createElement("p")
  like.innerText = `${character.name} has $0 in likes!`

  const likeButton = document.createElement("div")
  likeButton.className = "like character-button"
  likeButton.innerText = `Like`

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete character-button"
  deleteButton.innerText = `Remove`
  deleteButton.addEventListener("click", () => {
    div.remove()
    fetch(`${API}/characters/${character.id}`, {
      method: "DELETE"
    })
    .then(res=> res.json())
    .then(() => div.remove())
  })
  div.append(like, likeButton, deleteButton)

  charactersList.appendChild(div)
}