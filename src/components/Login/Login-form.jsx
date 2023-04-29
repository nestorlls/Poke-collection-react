import React, { useState } from 'react';
import { useAuth } from '../../context/Auth-Context';
import { Input } from '../Input/Input';
import FormWrapper from './Form-UI';

export const LoginForm = () => {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <FormWrapper>
      <form className='form' onSubmit={handleSubmit}>
        <Input
          label={'Email'}
          id={'email'}
          name={'email'}
          type={'email'}
          value={formData.email}
          onChange={handleChange}
          placeholder='example@mail.com'
        />
        <Input
          label={'Password'}
          id={'password'}
          name={'password'}
          type={'password'}
          value={formData.password}
          onChange={handleChange}
          placeholder='**********'
        />
        <button className='submit' onSubmit={handleSubmit} type='submit'>
          Login
        </button>
      </form>
    </FormWrapper>
  );
};
