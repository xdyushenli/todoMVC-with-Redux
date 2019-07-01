import React from 'react';
import TodoMVC from '../components/TodoMVC';
import renderer from 'react-test-renderer'

it('render correctly', () => {
    const tree = renderer.create(<TodoMVC></TodoMVC>).toJSON();
    
    expect(tree).toMatchSnapshot();
})