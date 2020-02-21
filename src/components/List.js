import React from 'react';
import Item from './Item.js';
import '../css/List.css';

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul id='list'>
                {
                    this.props.todos !== undefined ?
                    this.props.todos.map(todo => {
                        return (<Item
                            key={todo.id}
                            id={todo.id}
                            completed={todo.completed}
                            text={todo.text}
                            toggleTodo={this.props.toggleTodo}
                            editTodo={this.props.editTodo}
                            deleteTodo={this.props.deleteTodo}
                        />)
                    }) :
                    null
                }
            </ul>
        )
    }
}