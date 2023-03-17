import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/Auth-Context';
import { reset, global } from './styles/Global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
