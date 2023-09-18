import React, { useState } from 'react';
import PokemonForm from './pokemonForm';
import PokemonInfo from './pokemonInfo';
import './style.css'
function App() {
  const [pokemonData, setPokemonData] = useState(null);
 

  const handleSearch = async (pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    setPokemonData({
      imageUrl: data.sprites.other.dream_world.front_default, 
      name: data.name,
      number: data.id,
      weight: data.weight / 10, 
      height: data.height / 10, 
      
    });
  };

  return (
    <div className='container'>
      <header>
        <strong>POKEMON API</strong>
      </header>
      <PokemonForm onSearch={handleSearch} />
      {pokemonData && <PokemonInfo {...pokemonData} />}
    </div>
  
  );
}

export default App;
