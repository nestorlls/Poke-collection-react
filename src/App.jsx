import { AuthenticateApp } from './Authentication/AuthenticateApp';
import { UnAuthenticateApp } from './Authentication/UnAuthenticateApp';
import { useAuth } from './context/Auth-Context';

function App() {
  const { user } = useAuth();
  return user ? <AuthenticateApp /> : <UnAuthenticateApp />;
}

export default App;
