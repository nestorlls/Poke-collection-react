import { tokenKey } from '../config';
import apiFetch from './api-fetch';

export const createUser = (userData) => {
  return apiFetch('/signup', { body: userData }).then((u) => {
    const { token, ...user } = u;
    sessionStorage.setItem(tokenKey, token);
    return user;
  });
};

export const getUser = () => {
  return apiFetch('/profile').then((u) => {
    const { _token, ...user } = u;
    return user;
  });
};