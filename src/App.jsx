import { useEffect, useState } from 'react';
import { AuthenticateApp } from './AuthenticateApp';
import { login } from './services/auth-services';
import { createUser, getUser } from './services/user-services';
import { UnAuthenticateApp } from './UnAuthenticateApp';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((u) => setUser(u))
      .catch(console.log);
  }, []);

  const handleLogin = (credentials) => {
    login(credentials)
      .then((u) => setUser(u))
      .catch(console.log);
  };

  const handleSignUp = (userData) => {
    createUser(credentials)
      .then((u) => setUser(u))
      .catch(console.log);
  };

  return user ? (
    <AuthenticateApp />
  ) : (
    <UnAuthenticateApp onLogin={handleLogin} onSignup={handleSignUp} />
  );
}

export default App;
