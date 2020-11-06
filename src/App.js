import React from 'react';
import './App.css';
import Search from './Search';
import Display from './Display';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonJson: {},
      empty: true,
    }
  }
  
  
  async pokemonSearch(pokemonName) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName + '?limit=20')
    const json = await response.json()
    this.setState({pokemonJson: json, empty: false})
 }

 pokemonSelect = (pokeJson) => {
   this.setState({pokemonJson: pokeJson, empty: false});
 }

  render() { 
    return (
      <div className='App-header'>
        <Search onClick={this.pokemonSearch.bind(this)}/>
        {this.state.empty ? <span /> : <Display pokemonJson={this.state.pokemonJson} onClick={this.pokemonSearch.bind(this)} />}
      </div>
    );
  }
}

export default App;

/*

App --- all async and data >>> render()
 - Search > f that creates the box
 - 


_________________________
| Search          | Details
| --------        |----------
| list of pokemon |
*/