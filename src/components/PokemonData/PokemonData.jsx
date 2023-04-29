import styled from '@emotion/styled';
import { MdFavorite } from 'react-icons/md';
import { colors, typeColors } from '../../styles/Colors';
import { typography } from '../../styles/typography';
import weight from '../../assets/weight.svg';
import height from '../../assets/height.svg';

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

  div.btn-add__remove {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;

  h2 {
    ${typography.bold[24]}
  }

  p.format-id {
    ${typography.bold[14]}
  }

  img {
    max-width: 144px;
  }

  div.poke-type {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  div.features {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 32px 0;

    div.feature {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;

      div.feature-img {
        width: 80px;
        display: flex;
        justify-content: center;
        gap: 8px;

        img {
        }

        span {
          ${typography.regular[10]}
        }
      }

      p.feature-letter {
        ${typography.regular[8]}
        color: ${colors.gray.medium}
      }
    }

    hr {
      border: none;
      border-right: 1px solid ${colors.gray.medium};
      height: 58px;
    }
  }
`;

const Type = styled.p`
  ${typography.bold[10]}
  background: ${({ type }) => typeColors[type]};
  color: #fff;
  padding: 2px 8px;
  border-radius: 50px;
  text-transform: capitalize;
`;

const formatId = (id) => {
  return `#${id.toString().padStart(3, '0')}`;
};

export const PokemonData = ({
  data,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}) => {
  const RegularContent = (
    <div className='btn-add__remove'>
      <MdFavorite color={colors.yellow[500]} />
      <span>Mark as favorite</span>
    </div>
  );

  const FavoriteContent = (
    <div className='btn-add__remove'>
      <MdFavorite color={colors.gray.light} />
      <span>Remove favorite</span>
    </div>
  );

  return (
    <Card>
      <h2 className='name'>{data.name}</h2>
      <p className='format-id'>{formatId(data.id)}</p>
      <img src={data.sprites.other['official-artwork'].front_default} />
      <div className='poke-type'>
        {data.types.map((element) => (
          <Type key={element.slot} type={element.type.name}>
            {element.type.name}
          </Type>
        ))}
      </div>
      <div className='features'>
        <div className='feature'>
          <div className='feature-img'>
            <img src={weight} alt='weight' />
            <span className='span'>{data.weight / 10} kg</span>
          </div>
          <p className='feature-letter'>Weight</p>
        </div>
        <hr />
        <div className='feature'>
          <div className='feature-img'>
            <img src={height} alt='height' />
            <span>{data.height / 10} m</span>
          </div>
          <p className='feature-letter'>Heidht</p>
        </div>
      </div>

      <FavoriteButton
        onClick={() =>
          isFavorite ? onRemoveFavorite(data) : onAddFavorite(data)
        }
      >
        {isFavorite ? RegularContent : FavoriteContent}
      </FavoriteButton>
    </Card>
  );
};
