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
        const pokeResponse = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
        const pokeJSON = await pokeResponse.json();
        this.setState({pokeJson: pokeJSON});
        await this.parsePokeList();
        //await this.sortPokeList();
    }

    async pokeLookup(link){
        const pokeResponse = await fetch(link);
        const pokeJSON = await pokeResponse.json();
        return pokeJSON;
    }

    async parsePokeList() {
        const data = this.state.pokeJson;
        const list = data.results
        let pokemonList = [];
        for(let i = 0; i < list.length; i++){
            const pokeData = this.pokeLookup(list[i].url);
            pokeData.then((obj) => {
                pokemonList.push(obj);
                // filteredPokemonList = pokemonList.filter(pokemon => pokemon.game_indicies.length > 0);
                this.setState({pokeList: pokemonList});
            });
        }
    }
    
    async sortPokeList () {
        const sortedList = [...this.state.pokeList].sort((a, b) => a.id - b.id);
        this.setState({pokeList: sortedList});
    }

    render(){
        return (
                <table>
                    <tbody>
                        {this.state.pokeList.map(pokemon => {
                            return (
                                <tr>
                                    <td><img src={pokemon.sprites.front_default} alt={pokemon.name} /></td>
                                    <td>#{pokemon.id}<br />{pokemon.name}</td>
                                    <td><button onClick={() => this.props.onClick(pokemon.name)}>View Details</button></td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        )
    }

}

export default AllSearch;



