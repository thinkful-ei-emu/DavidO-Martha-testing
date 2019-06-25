import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';

const card1 ={
  title: 'title1',
  content: 'content of card',
  key: 1
}
const card2 ={
  title: 'title2',
  content: 'content of card',
  key: 2
}

describe('<List />', () =>{
  it('renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<List key="1" cards={[card1, card2]} header="header1" />, div);
    ReactDOM.unmountComponentAtNode(div);

  });
});

it('renders the UI as expected', () => {
  const snapshot = renderer
    .create(<List key="1" cards={[card1, card2]} header="header1"/>)
    .toJSON();
  expect(snapshot).toMatchSnapshot();  
});
