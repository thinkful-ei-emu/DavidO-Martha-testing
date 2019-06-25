import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import Card from './Card.js';

describe('<List />', () =>{
  it('renders without crashing', ()=> {
    const div = document.createElement('div');
  
    ReactDOM.render(<List header="List1" card = "SomeNonesense" key="1" title="card title" content="content of card" />, div);
  
    ReactDOM.unmountComponentAtNode(div);
    console.log("Test this!")
  });
});