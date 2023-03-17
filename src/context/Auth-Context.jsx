import { createContext, useContext, useEffect, useState } from 'react';
import { tokenKey } from '../config';
import { createUser, getUser } from '../services/user-services';
import * as auth from '../services/auth-services';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((u) => setUser(u))
      .catch(console.log);
  }, []);

  function login(credentials) {
    auth
      .login(credentials)
      .then((u) => setUser(u))
      .catch(console.log);
  }

  function logout() {
    auth
      .logout()
      .then((u) => {
        sessionStorage.removeItem(tokenKey);
        setUser(null);
      })
      .catch(console.log);
  }

  function signup(userData) {
    createUser(userData)
      .then((u) => setUser(u))
      .catch(console.log);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
