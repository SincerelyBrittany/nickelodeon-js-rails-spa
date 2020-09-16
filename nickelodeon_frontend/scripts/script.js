const API = "http://localhost:3000"
const body = document.querySelector("body")
const form = document.querySelector("form.form-center")
const updateform = document.querySelector("form.updatedform-center")

fetch("http://localhost:3000/characters")
  .then(res => res.json())
  .then(renderCharacters)


//https://vignette.wikia.nocookie.net/peanutstreet/images/b/bc/Eliza-Thornberry.png
//   form.addEventListener("submit", (e) =>{
//       e.preventDefault()
//       var elements = Array.from(form.elements)
//       elements.forEach(element => {
//         let element.name = element.value
//       })
//   })

form.addEventListener("submit", e => {
    e.preventDefault();
    let reqBody = {};
    Object.keys(form.elements).forEach(key => {
        let element = form.elements[key];
        if (element.type !== "submit") {
            reqBody[element.name] = element.value;
        }
    });
    console.log(reqBody); // Call to function for form submission
    fetch("http://localhost:3000/characters", {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(reqBody) // body data type must match "Content-Type" header
        }).then(res => {
            if(res.status !== 200){
                throw new TypeError('BAD STATUS CODE!')
            }
            const contentType = res.headers.get('content-type')
            if (!contentType || !contentType.includes('application/json')){
                throw new TypeError("NOT JSON!!!")
            }
            
            return res.json()
        })
        .then(json =>{
            renderCharacter(json)
            form.reset()
            // console.log(json)
        })
        .catch(err => { 
            // console.log(err)
        })  
});



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
    <p>Show: ${character.show_name}</p>
  `
  const like = document.createElement("p")
  like.innerText = `${character.name} has 0 in likes!`

  const likeButton = document.createElement("div")
  likeButton.className = "like character-button"
  likeButton.innerText = `Like`

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete character-button"
  deleteButton.innerText = `Remove`
  deleteButton.addEventListener("click", () => {
    fetch(`${API}/characters/${character.id}`, {
      method: "DELETE"
    })
    .then(res=> res.json())
    .then(() => div.remove())
  })

  const editButton = document.createElement("div")
  editButton.className = "edit character-button"
  editButton.innerText = `Edit`
  editButton.addEventListener("click", () => {
    // div.remove()
    openModal(character, div);
    // fetch(`${API}/characters/${character.id}`, {
    //   method: "PATCH"
    // })
    // .then(res=> res.json())
    // .then(data => console.log(data,"edit button"));
  })

  div.append(like, likeButton, editButton, deleteButton)

  charactersList.appendChild(div)
}

function openModal(character, div){
    console.log(character, "this is character in open modal")
    // console.log(div, "this is div in open modal")
    let modal = document.getElementById("myModal");
    let modalContent = document.querySelector(".modal-content")
    let btn = document.querySelector("div.edit");
    let span = document.getElementsByClassName("close")[0];
    div.onclick = function(e) {
        console.log(div, "this is e")
        modalContent.innerHTML = `
            <form class="updatedform-center">
            <label for="name">Name:</label><br>
            <input type="text" value=${character.name} name="name"><br>
            <label for="actor">Actor:</label><br>
            <input type="text" value=${character.actor} name="actor"><br>
            <label for="image">Image:</label><br>
            <input type="text" value=${character.image} name="image"><br>
            <label for="ally">Ally:</label><br>
            <input type="text" value=${character.ally} name="ally"><br>
            <label for="enemy">Enemy:</label><br>
            <input type="text" value=${character.enemy} name="enemy"><br>
            <label for="show">tvShow:</label><br>
            <input type="text" name="show"><br>
            <input type="submit" class="update-submit-btn" value="Update character!">
            <br>
        </form>
        `

        modalContent.addEventListener("submit", (e)=>{
            e.preventDefault();
            console.log(e.currentTarget)
        })
        modal.style.display = "block";
        let updateBtn = document.querySelector(".update-submit-btn")
        console.log(updateBtn)
        // document.querySelector(".update-submit-btn").addEventListener("submit",(e)=>{
        //     e.preventDefault();
        //     console.log(e)
        // })
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}


