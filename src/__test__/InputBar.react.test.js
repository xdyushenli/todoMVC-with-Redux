import React from 'react';
import InputBar from '../components/InputBar';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('render test', () => {
    const tree = renderer.create(
        <InputBar></InputBar>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})

it('state should be {inputText: "some text"}', () => {
    const component = shallow(<InputBar></InputBar>);
    component.find('input').simulate('change', {target: {value: 'some text'}});
    
    expect(component.state()).toEqual({inputText: 'some text'});
})