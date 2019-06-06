import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/app';

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

// it's unnecessary

const Hello = (props) => {
  return <div>Hello, {props.name}</div>;
};

const greetings = document.getElementById('greetings');
ReactDOM.render(<Hello name="Chai" />, greetings);

