import React, { Component } from 'react'
import Character from '../Components/CharacterCard'
import apiCharacters from '../api'
import Form from '../Components/Form'
import Search from '../Components/Search'

class Index extends Component {

    state = {
        apiCharacters,
        filteredCharacters: apiCharacters
    }

    // make a card for each character
    // console.log(props.characters)


    showCharacters = () => {
        return this.state.filteredCharacters.map(characterObj => <Character character={characterObj}/>)
    }

    newCharacterInfo = (newCharacter) =>{
        // console.log("hi", newCharacter)
        //need to add new character to apiCharacters list
        this.setState({
          apiCharacters: [...apiCharacters, newCharacter]
        })
    }
    
    appSearchHandler = (search) =>{
        // console.log("hi:", search)
        let newCharacters = this.state.filteredCharacters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()))
        this.setState({
            filteredCharacters: newCharacters
        })
    }

    render(){
        return (
            <>
                <Form appSubmit={this.newCharacterInfo}/>
                <br></br>
                <Search appSearch={this.appSearchHandler} />
                <h1>Character Index</h1>
                <div className="character-flex-container">
                    {this.showCharacters()}
                </div>
            </>
        )

    }
}

export default Index