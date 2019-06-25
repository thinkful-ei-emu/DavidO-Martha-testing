import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import renderer from 'react-test-renderer';

describe('<Card />', () =>{
  it('renders without crashing', ()=> {
    const div = document.createElement('div');
  
    ReactDOM.render(<Card key="1" title="Card1" content="Content of card" />, div);
  
    ReactDOM.unmountComponentAtNode(div);

  });
});

it('renders the UI as expected', () => {
  const snapshot = renderer
    .create(<Card key="1" title="Card1" content="Content of card"/>)
    .toJSON();
  expect(snapshot).toMatchSnapshot();  
});
