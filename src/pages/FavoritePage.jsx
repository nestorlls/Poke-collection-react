import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { colors, typeColors } from '../styles/Colors';
import { typography } from '../styles/typography';
import iconStar from '.././assets/star.svg';

const PokeCard = styled.div`
  border: 2px solid ${({ type }) => typeColors[type]};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  div.star_id {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 8px 0 8px;

    img.star {
      width: 15px;
      height: 15px;
    }

    span {
      ${typography.regular[8]}
      color: ${({ type }) => typeColors[type]};
    }
  }

  img.img {
    width: 72px;
    height: 72px;
  }

  div.name_pok-container {
    background-color: ${({ type }) => typeColors[type]};
    width: 100%;
    height: 24px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    p.name_pokemon {
      color: ${colors.white};
      ${typography.regular[10]}
    }
  }
`;

const Favorites = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
  gap: 1rem;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  a {
    text-decoration: none;
    text-align: start;
    color: ${colors.gray.medium};
    :hover {
      color: ${colors.pink[600]};
      text-decoration: underline;
    }
  }

  h3 {
    ${typography.bold[24]}
    text-align: center;
  }
`;

export const FavoritePage = ({ favorites }) => {
  // console.log(favorites);
  return (
    <Wrapper>
      <Link to='/'>Search</Link>
      <h3>Favorites</h3>
      <Favorites>
        {favorites.map((fav) => (
          <PokeCard key={fav.id} type={fav.pokemon_type}>
            <div className='star_id'>
              <img className='star' src={iconStar} alt='star favorite' />
              <span>#{fav.id}</span>
            </div>
            <div>
              <img className='img' src={fav.pokemon_avatar_url} alt='pokemon' />
            </div>
            <div className='name_pok-container'>
              <p className='name_pokemon'>{fav.pokemon_name}</p>
            </div>
          </PokeCard>
        ))}
      </Favorites>
    </Wrapper>
  );
};
