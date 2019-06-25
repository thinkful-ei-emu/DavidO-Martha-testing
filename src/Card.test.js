import React from 'react';
import ReactDOM from '.react-dom';
import Card from '/.Card';

describe('<Card />', () =>{
  it('renders without crashing', ()=> {
    const div = document.createElement('div');
  
    ReactDOM.render(<Card title="Card1" content="Content of card" />, div);
  
    ReactDOM.unmountComponentAtNode(div);
    console.log("hi")
  });
});
