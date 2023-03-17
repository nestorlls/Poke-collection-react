import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth } from './context/Auth-Context';
import { FavoritePage } from './pages/FavoritePage';
import { SearchPage } from './pages/SearchPage';
import { createFavorite, getFavorite, removeFavorite } from './services/favoriteServices';

export const AuthenticateApp = () => {

  const { logout } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorite()
      .then((favorites) => setFavorites(favorites))
      .catch(console.log);
  }, []);

  const handleAddFavorite = (pokemon) => {
    const data = {
      pokemon_name: pokemon.name,
      pokemon_id: pokemon.id,
      pokemon_type: pokemon.types[0].type.name,
      pokemon_avatar_url:
        pokemon.sprites.other['official-artwork'].front_default,
    };

    createFavorite(data)
      .then((newFavorite) => setFavorites([...favorites, newFavorite]))
      .catch(console.log);
  };

  const handleRemoveFavorite = (pokemon) => {
    const favorite = favorites.find((fav) => fav.pokemon_name === pokemon.name);

    removeFavorite(favorite.id).then(() => {
      const newFavorites = favorites.filter(
        (f) => f.pokemon_name !== pokemon.name
      );
      setFavorites(newFavorites);
    });
  };

  return (
    <>
      <button onClick={logout}>Log out</button>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <SearchPage
                favorites={favorites}
                onAddFavorites={handleAddFavorite}
                onRemoveFavorites={handleRemoveFavorite}
              />
            }
          />
          <Route
            path='/favorites'
            element={<FavoritePage favorites={favorites} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
