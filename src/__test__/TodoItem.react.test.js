import React from 'react';
import TodoItem from '../components/TodoItem';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {activeItem, completedItem} from './data/fakeData';

Enzyme.configure({adapter: new Adapter()});

it('render active item', () => {
    const tree = renderer.create(
        <TodoItem 
            item={activeItem}
        ></TodoItem>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})

it('render completed item', () => {
    const tree = renderer.create(
        <TodoItem 
            item={completedItem}
        ></TodoItem>
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
})

it('simulate edit active item, state should be {editing: true, inputText: "some text"}', () => {
    const component = shallow(
        <TodoItem 
            item={activeItem}
        ></TodoItem>
    );
    component.find('.item-text').simulate('doubleClick');
    component.find('input').simulate('change', {target: {value: 'some text'}})
    
    expect(component.state()).toEqual({editing: true, inputText: 'some text'});
})

it('simulate edit completed item, state should be {editing: true, inputText: "some text"}', () => {
    const component = shallow(
        <TodoItem 
            item={completedItem}
        ></TodoItem>
    );
    component.find('.item-text').simulate('doubleClick');
    component.find('input').simulate('change', {target: {value: 'some text'}})
    
    expect(component.state()).toEqual({editing: true, inputText: 'some text'});
})