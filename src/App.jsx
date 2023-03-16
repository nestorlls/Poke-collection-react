import { useState } from 'react';
import { Input } from './components/Input/Input';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
    console.log(formData);
  };

  return (
    <div>
      <h1>Welcome to Poke Collection</h1>
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
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
