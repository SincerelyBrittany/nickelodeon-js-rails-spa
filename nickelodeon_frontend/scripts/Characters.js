class Character {
    static all = []

        constructor(character){
        this.character = character
        this.render()
        console.log(this.character)
        this.constructor.all.push(this)
    }

    static getAll(){
        api.getAllCharacters().then(characters => characters.forEach(character => new Character(character)))
        // api.getAllCharacters().then(toys => toys.forEach(toy => new Character(toy)))
      }

    render(){
        //  debugger
        const charactersList = document.querySelector(".characters-list")
        const div = document.createElement("div")
        div.classList.add("character-card")
        div.dataset.id = this.character.id
        this.cardContent(div)
        charactersList.appendChild(div)
        // app.appendChild(div)
        return charactersList
    }   

    cardContent(card){
        const characterImg = document.createElement('img')
        characterImg.src = `${this.character.image}`
        // characterImg.alt = this.character.name
        const characterName= document.createElement('p')
        characterName.innerText = `${this.character.name}`
        const characterAlly= document.createElement('p')
        characterAlly.innerText = `${this.character.ally}`
        const characterEnemy= document.createElement('p')
        characterEnemy.innerText = `${this.character.enemy}`
        const characterActor= document.createElement('p')
        characterActor.innerText = `${this.character.actor}`
        return card.append(characterImg, characterName, characterAlly, characterEnemy, characterEnemy)

    }
    
    
    //   addCharacterContent(div, character)
//   // console.log(character)
//   charactersList.appendChild(div)
// }

// function addCharacterContent(div, character){
//     div.classList.add("character-card")
//   div.innerHTML = `
//     <img src="${character.image}" alt=${character.name}/>
//     <p><strong>${character.name}</strong></p>
//     <p>Ally: ${character.ally}</p>
//     <p>Enemy: ${character.enemy}</p>
//     <p>Played by ${character.actor}</p>
//     <p>Show: ${character.show_name}</p>
//   `
//   const like = document.createElement("p")
//   like.innerText = `${character.name} has ${character.likes} likes!`

//   const likeButton = document.createElement("div")
//   likeButton.className = "like character-button"
//   likeButton.innerText = `Like`
//   likeButton.addEventListener("click", ()=>{
//     fetch(`${API}/characters/${character.id}`, {
//         method: "PATCH",
//         body: JSON.stringify({likes: 1})
//       })
//       .then(res=> res.json())
//       .then((character)=> {
//           // console.log(character)
//           like.innerText = `${character.name} has ${character.likes} likes!`
//         });
//   })

//   const deleteButton = document.createElement("div")
//   deleteButton.className = "delete character-button"
//   deleteButton.innerText = `Remove`
//   deleteButton.addEventListener("click", () => {
//     fetch(`${API}/characters/${character.id}`, {
//       method: "DELETE"
//     })
//     .then(res=> res.json())
//     .then(() => div.remove())
//   })

//   const editButton = document.createElement("div")
//   editButton.className = "edit character-button"
//   editButton.innerText = `Edit`
//   editButton.addEventListener("click", () => {
//     // div.remove()
//     openModal(character, div);
//   })

//   div.append(like, likeButton, editButton, deleteButton)
// }

  
      
}