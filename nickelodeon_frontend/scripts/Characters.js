class Character {
    constructor(character){
        this.character = character
        debugger
        this.render() 
    }
    render(){
        const charactersList = document.querySelector(".characters-list")
        const div = document.createElement("div")
        // console.log(this.character)
        addCharacterContent(div, this.character)
        // card.classList.add("card")
        // this.card = card
        // this.renderInnerHTML()
        // toyCollection.appendChild(card)
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