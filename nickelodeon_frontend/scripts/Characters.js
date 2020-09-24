class Character {
    constructor(character){
        this.character = character
        this.render() 
    }
    render(){
        const charactersList = document.querySelector(".characters-list")
        const div = document.createElement("div")
        addCharacterContent(div, character)
    }      
  
      
}