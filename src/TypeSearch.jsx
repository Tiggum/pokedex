import React from 'react'


const pokemonTypeList = async (type) => {
    const list = await fetch('https://pokeapi.co/api/v2/types/' + type )
    return list.json()
}

const TypeSeach = (props) => {
    let types = props.types
    let pokeJson = pokemonTypeList(types[0])
    let similarPokemon = pokeJson.pokemon

    return (
        <button onClick={}
    )
}


export default TypeSearch;