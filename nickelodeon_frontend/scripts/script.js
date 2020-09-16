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
    <p>${character.ally}</p>
    <p>${character.enemy}</p>
    <p>Played by ${character.actor}</p>
  `
  charactersList.appendChild(div)
}
