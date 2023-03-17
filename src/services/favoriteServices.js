import apiFetch from './api-fetch';

export const createFavorite = (data) => {
  return apiFetch('favorites', { body: data });
};

export const removeFavorite = (id) => {
  return fetch('favorites/' + id, { method: 'DELETE' });
};

export const getFavorite = () => {
  return apiFetch('favorites');
};
