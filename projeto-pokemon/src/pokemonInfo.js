import React from 'react';
import './style.css'

function PokemonInfo(props) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.name} />
      <h2>{props.name}</h2>
      <p>Número: {props.number}</p>
      <p>Peso: {props.weight} kg</p>
      <p>Altura: {props.height} m</p>
    </div>
  );
}

export default PokemonInfo;
