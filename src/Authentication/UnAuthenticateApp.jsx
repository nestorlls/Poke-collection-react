import styled from '@emotion/styled';
import React, { useState } from 'react';
import { LoginForm } from '../components/Login/Login-form';
import { SignUpForm } from '../components/SignupForm/SignupForm';
import { colors } from '../styles/Colors';

const CustomLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${colors.pink[500]};
  }
`;

export const UnAuthenticateApp = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '48px',
        padding: '96px 51px 0 51px',
      }}
    >
      <h1>Welcome to Poke Collection</h1>
      {showLogin ? <LoginForm /> : <SignUpForm />}
      <CustomLink onClick={handleClick}>
        {showLogin ? 'create account' : 'Login'}
      </CustomLink>
    </div>
  );
};
