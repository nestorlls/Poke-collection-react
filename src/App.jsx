import { useState } from 'react';

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
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='llanque@gmail.com'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='***********'
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
