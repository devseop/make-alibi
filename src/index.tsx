import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import reset from 'reset';
import App from './App';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <>
    <Global styles={reset} />
    <App />
  </>,
);
