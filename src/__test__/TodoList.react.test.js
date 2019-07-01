import React from 'react';
import TodoList from '../components/TodoList';
import renderer from 'react-test-renderer';
import {todoList} from './data/fakeData';

it('render all items', () => {
    const tree = renderer.create
        (
            <TodoList 
                todoList={todoList}
                showMode='all'
            ></TodoList>
        ).toJSON();
    expect(tree).toMatchSnapshot();
})

it('render active items', () => {
    const tree = renderer.create
        (
            <TodoList 
                todoList={todoList}
                showMode='active'
            ></TodoList>
        ).toJSON();
    expect(tree).toMatchSnapshot();
})

it('render completed items', () => {
    const tree = renderer.create
        (
            <TodoList 
                todoList={todoList}
                showMode='completed'
            ></TodoList>
        ).toJSON();
    expect(tree).toMatchSnapshot();
})