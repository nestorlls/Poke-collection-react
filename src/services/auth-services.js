import { tokenKey } from '../config';
import apiFetch from './api-fetch';

export function login(credentials) {
  return apiFetch('login', { body: credentials }).then((user) => {
    const { token, ...userdata } = user;
    sessionStorage.setItem(tokenKey, token);
    return userdata;
  });
}
