import React from 'react';

export default function SearchBar({onSearch}) {
  return (
  <div>
    <input type='text'/>
    <button onClick={() => onSearch('Buscando Ciudades...')}>Agregar</button>
  </div>
  )
};