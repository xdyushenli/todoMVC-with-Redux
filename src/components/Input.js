import React from 'react';
import '../css/Input.css';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='input'>
                <div
                    className='select-all'
                    onClick={(e) => this.props.selectAll(e)}
                ></div>
                <input
                    type="text"
                    placeholder="What need to be done?"
                    onKeyUp={(e) => this.props.addTodo(e)}
                />
            </div>
        )
    }
}