import { useState } from 'react';
import { LoginForm } from './components/Login/Login-form';
import { SignUpForm } from './components/SignupForm/SignupForm';


function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <h1>Welcome to Poke Collection</h1>
      {showLogin ? <LoginForm /> : <SignUpForm />}
      <button onClick={handleClick}>
        {showLogin ? 'create account' : 'Login'}
      </button>
    </div>
  );
}

export default App;
