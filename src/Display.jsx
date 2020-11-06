import React from 'react'

const Display = (props) => {    
    let pokemon = props.pokemonJson;
    
    if (pokemon.count > 0) {
        return (
            <ul>
                {pokemon.results.map(index => <li>{index.name}</li>)}
            </ul>
        )
    } else {
        let pokemonID = pokemon.id;
        let pokemonName = pokemon.name;
        let pokemonType = pokemon.types[0].type.name
        if (pokemon.types[1] !== undefined) {
            pokemonType += ", " + pokemon.types[1].type.name
        } 
        let pokemonSprite = pokemon.sprites.front_default
        
        console.log(props.pokemonJson)
        return (
            <div>
                <h3>{pokemonID}: {pokemonName}</h3>
                <img src={pokemonSprite} alt={pokemonName} />
                <br />
                <h4>Pokemon Types: {pokemonType} </h4>
            </div>
        );
    }
    

}

export default Display;

