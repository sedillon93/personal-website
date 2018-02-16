import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import '../reset.scss';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
  <App />,
  container
);
