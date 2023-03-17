import { AuthenticateApp } from './AuthenticateApp';
import { useAuth } from './context/Auth-Context';
import { UnAuthenticateApp } from './UnAuthenticateApp';

function App() {
  const { user } = useAuth();
  return user ? <AuthenticateApp /> : <UnAuthenticateApp />;
}

export default App;
