import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { useAuth } from '../../context/Auth-Context';
import FormWrapper from '../Login/Form-UI';

export const SignUpForm = () => {
  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
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
        <Input
          label={'Firstname'}
          id={'firstname'}
          name={'firstname'}
          value={formData.first_name}
          onChange={handleChange}
          placeholder='First name'
        />
        <Input
          label={'Lastname'}
          id={'lastname'}
          name={'lastname'}
          type={'lastname'}
          value={formData.last_name}
          onChange={handleChange}
          placeholder='Last name'
        />
        <button className='submit' type='submit'>
          Create account
        </button>
      </form>
    </FormWrapper>
  );
};
