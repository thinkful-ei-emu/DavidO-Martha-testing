import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';

describe('<Card />', () =>{
  it('renders without crashing', ()=> {
    const div = document.createElement('div');
  
    ReactDOM.render(<Card key="1" title="Card1" content="Content of card" />, div);
  
    ReactDOM.unmountComponentAtNode(div);
  });
});
