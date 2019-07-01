import React from 'react';
import TodoItem from './TodoItem';
import '../index.css';

export default class TodoList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let todoListArr = [...this.props.todoList];
        let showMode = this.props.showMode;

        if(showMode === 'active') {
            todoListArr = todoListArr.filter(item => item.isActive)
        }

        if(showMode === 'completed') {
            todoListArr = todoListArr.filter(item => !item.isActive)
        }

        const todoList = todoListArr.map(((item) => 
            <TodoItem item={item}
                      selectSingle={this.props.selectSingle}
                      changeText={this.props.changeText}
                      deleteItem={this.props.deleteItem}
                      key={item.id}
            ></TodoItem>)
        );

        return (
            <ul id='todo-list'>
                {todoList}
            </ul>
        )
    }
}