import React from 'react';
import ReactDOM from 'react-dom';
import Bolao from './Bolao';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bolao />, div);
});
