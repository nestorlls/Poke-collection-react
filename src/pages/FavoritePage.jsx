import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const typeColors = {
  bug: '#A8B820',
  dark: '#705848',
  dragon: '#7038F8',
  electric: '#F8D030',
  fairy: '#EE99AC',
  fighting: '#C03028',
  fire: '#F08030',
  flying: '#A890F0',
  ghost: '#705898',
  grass: '#78C850',
  ground: '#E0C068',
  ice: '#98D8D8',
  normal: '#A8A878',
  poison: '#A040A0',
  psychic: '#F85888',
  rock: '#B8A038',
  steel: '#B8B8D0',
  water: '#6890F0',
};

const PokeCard = styled.div`
  border: 2px solid ${({ type }) => typeColors[type]};
  border-radius: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Favorites = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FavoritePage = ({ favorites }) => {
  return (
    <Wrapper>
      <Link to='/'>Search</Link>
      <h3>Favorites</h3>
      <Favorites>
        {favorites.map((fav) => (
          <PokeCard key={fav.id} type={fav.pokemon_type}>
            <p>{fav.pokemon_name}</p>
            <img src={fav.pokemon_avatar_url} alt='pokemon' />
          </PokeCard>
        ))}
      </Favorites>
    </Wrapper>
  );
};
