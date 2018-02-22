import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './stylesheets/main.scss';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
  <App />,
  container
);
