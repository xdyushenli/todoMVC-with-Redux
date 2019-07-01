import React from 'react';
import ToggleBar from '../components/ToggleBar';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {todoList} from './data/fakeData';

Enzyme.configure({adapter: new Adapter()});

it('render all toggle', () => {
    const tree = renderer.create
        (
            <ToggleBar
                todoList={todoList}
                showMode='all'
            ></ToggleBar>
        ).toJSON();

    expect(tree).toMatchSnapshot();
})

it('render active toggle', () => {
    const tree = renderer.create
        (
            <ToggleBar
                todoList={todoList}
                showMode='active'
            ></ToggleBar>
        ).toJSON();

    expect(tree).toMatchSnapshot();
})

it('render completed toggle', () => {
    const tree = renderer.create
        (
            <ToggleBar
                todoList={todoList}
                showMode='completed'
            ></ToggleBar>
        ).toJSON();

    expect(tree).toMatchSnapshot();
})