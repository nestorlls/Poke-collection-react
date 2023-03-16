import React, { useState } from 'react';
import { Input } from '../Input/Input';

export const SignUpForm = (onSignup) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    login(formData).then(console.log).catch(console.log);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          placeholder='first name'
        />
        <Input
          label={'Lastname'}
          id={'lastname'}
          name={'lastname'}
          type={'lastname'}
          value={formData.last_name}
          onChange={handleChange}
          placeholder='last name'
        />
        <button type='submit'>Create account</button>
      </form>
    </div>
  );
};
