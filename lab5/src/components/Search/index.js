import React from 'react';
import Axios from 'axios';

{/* import Pokemon from '../Pokemon/index.js'; */}

class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: "",
      searchValue: "",
      loaded: false
    };
  }

  fetch() {
    Axios('https://pokeapi.co/api/v2/pokemon/charmander')
    .then((response) => {
      this.setState({pokemon: response.data});
      this.setState({loaded: true});
    });
  }

  render () {
    return (
      <div>
        <br />
        <input type="text" />
        <br />
        <button>Submit</button>

      {
        this.state.loaded ? (
          <div>
            <p>{this.state.pokemon.name}</p>
          </div>
        ) : (
          <div>
            <p>Not Loaded</p>
          </div>
        )
      }
      </div>
    );
  }

}

export default Search;
