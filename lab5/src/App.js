import { useState } from 'react';
import Axios from 'axios';

function App() {

  // Track what is being searched for
  const [search, setSearch] = useState("");

  // Track what is found when searching
  const [pokemon, setPokemon] = useState({});

  // Track if the loading is done or not
  const [loading, setLoading] = useState(true);

  /**
   * The searchMonster() function uses Axios to communicate to the PokeAPI.
   *
   * It uses the "search" variable.
   */
  function searchMonsters() {
    // Set loading to true
    setLoading(true);

    // Communicate to the PokeAPI
    Axios('https://pokeapi.co/api/v2/pokemon/' + search)
    // And then...
    .then(function (response) {
        // Save the received Pokemon.
        setPokemon(response.data);
        // Update the loading.
        setLoading(false);
    })
    .catch(function (error) {
        // handle error
        console.log("Error: " + error);
    });
  }

  return (
    <div className="App">
      <input type="text" onChange={(event) => {
        // Update "search" to be whatever the user typed as they type (change) it.
        setSearch(event.target.value);
      }} />
      <button onClick={() => searchMonsters()}>Search</button>
      {
        <p>Searched: {search}</p>
      }
      {
        (loading == true) ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2>{pokemon.name}</h2>
            <p>{pokemon.id}</p>
            <img src={pokemon.sprites.front_default} />
          </div>
        )
      }
    </div>
  );
}

export default App;
