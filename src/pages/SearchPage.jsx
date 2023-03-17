import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Input } from '../components/Input/Input';
import { getPokemon } from '../services/PokeApi-services';
import { colors } from '../styles/Colors';
import { PokemonData } from '../components/PokemonData/PokemonData';
import { Link } from 'react-router-dom';

const Error = styled.p`
  color: ${colors.red[50]};
`;

export const SearchPage = ({ favorites, onAddFavorites, onRemoveFavorites }) => {
  const [query, setQuery] = useState('');
  const [state, setState] = useState({
    status: 'idle', // success, error, pending
    data: null,
    error: null,
  });

  // variables derivadas
  const { status, data: pokemon, error } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.length === 0) return;

    setState({ status: 'pending', data: pokemon, error: null });

    getPokemon(query)
      .then((pokemon) => {
        setState({ status: 'success', data: pokemon, error: null });
      })
      .catch(() => {
        setState({
          status: 'error',
          data: null,
          error: 'El pokemon no existe!',
        });
      });
  };

  // useEffect(() => {
  //   console.log('Hola favorite', favorite);
  // }, [favorite]);

  const isFavorite = favorites.find((f) => f.pokemon_name === pokemon?.name)
    ? true
    : false;

  return (
    <div>
      <Link to='/favorites'>Go to Favorites</Link>
      <form onSubmit={handleSubmit}>
        <Input
          name='query'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      {status == 'idle' && 'Ready to search'}
      {status == 'success' && (
        <PokemonData
          data={pokemon}
          onAddFavorite={onAddFavorites}
          onRemoveFavorite={onRemoveFavorites}
          isFavorite={isFavorite}
        />
      )}
      {status == 'error' && <Error>{error}</Error>}
      {status == 'pending' && 'Loading...'}
    </div>
  );
};
