class ApiService{
    getAllCharacters(){
        return fetch("http://localhost:3000/characters")
        .then(res => res.json())
    }

    getAllShows(){
        return fetch("http://localhost:3000/shows")
        .then(res => res.json())
    }


    deleteCharacter(){
        
    }
}