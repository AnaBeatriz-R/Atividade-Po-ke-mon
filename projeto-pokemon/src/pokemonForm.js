import React, { useState } from 'react';
import './style.css'

function PokemonForm(props) {
  const [pokemonName, setPokemonName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(pokemonName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="pokemonName"
        value={pokemonName}
        onChange={(event) => setPokemonName(event.target.value)}
        placeholder='Digite um Pokemon'
      />
      <button type="submit">Buscar</button>
      <br></br>
    </form>
    
  );
}

export default PokemonForm;
