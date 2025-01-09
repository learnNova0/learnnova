// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from './amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import App from './App';

// Configure Amplify with your settings
Amplify.configure(outputs);

// Create the root React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
);
