import styled from '@emotion/styled';
import React, { useState } from 'react';
import { LoginForm } from './components/Login/Login-form';
import { SignUpForm } from './components/SignupForm/SignupForm';
import { colors } from './styles/Colors';

const CustomLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${colors.pink[500]};
  }
`;

export const UnAuthenticateApp = ({ onLogin, onSignup }) => {
  const [showLogin, setShowLogin] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <h1>Welcome to Poke Collection</h1>
      {showLogin ? (
        <LoginForm onLogin={onLogin} />
      ) : (
        <SignUpForm onSignup={onSignup} />
      )}
      <CustomLink onClick={handleClick}>
        {showLogin ? 'create account' : 'Login'}
      </CustomLink>
    </div>
  );
};
