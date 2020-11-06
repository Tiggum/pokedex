import React from 'react';

class AllSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nameSearch: '',
            pokeJson: '',
            pokeList: [],
        }
    }

    async componentDidMount() {
        const pokeResponse = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1100')
        const pokeJSON = await pokeResponse.json();
        this.setState({pokeJson: pokeJSON});
        this.parsePokeList();
    }

    async pokeLookup(link){
        const pokeResponse = await fetch(link);
        const pokeJSON = await pokeResponse.json();
        return pokeJSON;
    }

    parsePokeList = () => {
        const data = this.state.pokeJson;
        const list = data.results
        let pokemonList = [];
        for(let i = 0; i < list.length; i++){
            const pokeData = this.pokeLookup(list[i].url);
            pokeData.then((obj) => {
                pokemonList.push(obj);
                // pokemonList = pokemonList.filter(pokemon => pokemon.game_indicies.length > 0);
                this.setState({pokeList: pokemonList});
            });
        }
    }

    render(){
        return (
                <ul>
                    {this.state.pokeList.map(pokemon => <li><img src={pokemon.sprites.front_default} alt={pokemon.name} /></li>)}
                </ul>
        )
    }

}

export default AllSearch;

