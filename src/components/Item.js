import React from 'react';
import '../css/Item.css';

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
        }
    }

    showInput = (e) => {
        this.setState({
            editing: true,
        }, () => {
            // 将焦点聚焦到输入框上
            let inputId = `edit-input-${this.props.id}`;
            document.getElementById(inputId).focus();
        })
    }

    hideInput = (e) => {
        this.setState({
            editing: false,
        })
    }

    render() {
        return (
            <li className={this.state.editing ? 'editing list-item' : 'list-item'}>
                <label
                    htmlFor={`toggle-${this.props.id}`}
                    className={this.props.completed ? 'checkbox completed-checkbox' : 'checkbox'}
                >
                    {
                        this.props.completed ? '✓' : ''
                    }
                </label>
                <input
                    id={`toggle-${this.props.id}`}
                    type='checkbox'
                    onChange={(e) => this.props.toggleTodo(e)}
                    style={{
                        display: 'none',
                    }}
                />
                <span
                    className={this.props.completed ? 'item-text completed-text' : 'item-text'}
                    onDoubleClick={this.showInput}
                >
                    {this.props.text}
                </span>
                <input
                    id={`edit-input-${this.props.id}`}
                    type='text'
                    className='edit-input'
                    value={this.props.text}
                    onChange={(e) => this.props.editTodo(e)}
                    onBlur={this.hideInput}
                />
                <span
                    className='delete'
                    onClick={(e) => this.props.deleteTodo(e)}
                >×</span>
            </li>
        )
    }
}