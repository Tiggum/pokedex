import React from 'react'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pokemonName: '',
        }
    } 
    
    handlePokemonName = (e) => {
        this.setState({pokemonName : e.target.value})
    }

    render () {
        return (
            <div>
                <label htmlFor="pokemonSearchBox"></label>
                <input type="text" name="pokemonSearchBox" id="pokemonSearchBox" onChange={this.handlePokemonName}/>
                <button onClick={() => this.props.onClick(this.state.pokemonName)}>Search</button>
            </div>
        );
    }
}

export default Search;

/*
_________________________________________
| Search "Pi"       | Details
| --------          |----------
| list of pokemon   | Pikachu details
| Pichu             | 
|       details >>  |
| Pikachu           |
|       details >>  |
*/