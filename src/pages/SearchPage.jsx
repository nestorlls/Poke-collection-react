import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Input } from '../components/Input/Input';
import { getPokemon } from '../services/PokeApi-services';
import { MdFavorite } from 'react-icons/md';
import { colors } from '../styles/Colors';
import { typography } from '../styles/typography';

const PokeImg = styled.img`
  max-width: 144px;
`;

const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${colors.gray.medium};
  border: none;
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;
  font-family: ${typography.text};
  font-weight: bold;
  color: #fff;
`;

const formatId = (id) => {
  id = String(id);
  return id.lenght < 2 ? `00${id}` : id.lenght < 3 ? `$#0${id}` : `#${id}`;
};

const PokemonData = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{formatId(data.id)}</p>
      <PokeImg src={data.sprites.other['official-artwork'].front_default} />
      {data.types.map((element) => (
        <p key={element.slot}>{element.type.name}</p>
      ))}
      <p>Weight: {data.weight / 10} kg</p>
      <p>Height: {data.height / 10} m</p>
      <FavoriteButton>
        <MdFavorite />
        Mark as favorite
      </FavoriteButton>
    </div>
  );
};

export const SearchPage = () => {
  const [query, setQuery] = useState('pikachu');
  const [pokemon, setPokemon] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    getPokemon(query)
      .then((pokemon) => setPokemon(pokemon))
      .catch(console.log);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name='query'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      {pokemon ? <PokemonData data={pokemon} /> : 'Ready to search'}
    </div>
  );
};
