console.log("hello from animals")

class Character {
    constructor(character){
        this.character = character
        this.card = this.createCard()
        this.render()
        console.log(this)
    }

    createCard(){
        
    }

    render(){
        const charactersList = document.createElement("div")
        body.append(renderedItems)
        renderedItems.appendChild(charactersList)
        charactersList.outerHTML = '<div class="characters-list">'
        characters.forEach(renderCharacter)
    }
}