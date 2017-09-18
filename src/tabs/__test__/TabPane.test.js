import React from 'react';
import TabPane from '../TabPane';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<TabPane key='tab1' tab='tab1'/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
