import React from 'react';
import Axios from 'axios';

import Pokemon from '../Pokemon/index.js';

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
    Axios('https://pokeapi.co/api/v2/pokemon/' + this.state.searchValue)
    .then((response) => {
      this.setState(
        {
          pokemon: response.data,
          loaded: true
        });
        console.log(this.state.pokemon.sprites)
    });
  }

  render() {
    return (
      <div>

        <input type="text" onChange={(event) => {this.setState({searchValue: event.target.value})}} />
        <br />

        <button onClick={() => {
          this.setState({loaded: false});
          this.fetch()
        }}>Search</button>

        {
          this.state.loaded ?
          (
            <div>
              <img src={this.state.pokemon.sprites.front_default} />
            </div>
          ) : (
            <p>Not Found!</p>
          )
        }

      </div>
    );
  }

}

export default Search;
