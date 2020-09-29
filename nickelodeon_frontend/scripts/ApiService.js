class ApiService{
    constructor(){
        this.baseURL = 
        "http://localhost:3000/characters"
    }

    getAllCharacters(){
        return fetch(this.baseURL)
        .then(res => res.json())
    }

    getAllShows(){
        return fetch("http://localhost:3000/shows")
        .then(res => res.json())
    }


    deleteCharacter(){
        
    }
}