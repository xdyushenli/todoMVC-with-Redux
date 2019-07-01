import React from 'react';
import InputBar from './InputBar';
import TodoList from './TodoList';
import ToggleBar from './ToggleBar';
import '../index.css';

export default class TodoMVC extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            todoList: [],
            showMode: 'all',
        };
    }

    // class inputbar
    selectAll(e) {
        let todoList = [...this.state.todoList];
        let isActiveArr = [];
        let willAllCompleted;

        todoList.forEach(item => isActiveArr.push(item.isActive));
        willAllCompleted = isActiveArr.reduce((total, val) => total || val)

        todoList.map((item) => {
            item.isActive = !willAllCompleted;
        })

        this.setState({todoList: todoList});
    }

    addItem(text) {
        let todoList = [...this.state.todoList];
        let item = {
            id: this.state.id,
            isActive: true,
            text: text
        }

        todoList.push(item);
        
        this.setState({
            id: this.state.id + 1,
            todoList: todoList
        })
    }

    // class todolist
    selectSingle(id, e) {
        let todoList = [...this.state.todoList];

        todoList.map(item => {
            if(item.id === id) {
                item.isActive = !item.isActive;
            }
        })

        this.setState({todoList: todoList});
    }

    changeText(id, text, e) {
        let todoList = [...this.state.todoList];

        todoList.map(item => {
            if(item.id === id) {
                item.text = text;
            }
        })

        this.setState({todoList: todoList});
    }

    deleteItem(id, e) {
        let todoList = [...this.state.todoList];

        for(let i = 0; i < todoList.length; i++) {
            if(todoList[i].id === id) {
                todoList.splice(i, 1);
                break;
            }
        }

        this.setState({todoList: todoList});
    }

    // class togglebar
    switchAll(e) {
        this.setState({
            showMode: 'all'
        })
    }

    switchActive(e) {
        this.setState({
            showMode: 'active'
        })
    }

    switchCompleted(e) {
        this.setState({
            showMode: 'completed'
        })
    }

    clearCompleted(e) {
        let todoList = [...this.state.todoList];

        for(let i = 0; i < todoList.length; ) {
            if(!todoList[i].isActive) {
                todoList.splice(i, 1);
            } else {
                i++;
            }
        }

        this.setState({todoList: todoList});
    }

    render() {
        let todoList = this.state.todoList;
        let showMode = this.state.showMode;

        return (
            <div id='todo-mvc'>
                <InputBar   selectAll={(e) => this.selectAll(e)}
                            addItem={(text) => this.addItem(text)}
                ></InputBar>
                <TodoList   todoList={todoList}
                            showMode={showMode}
                            selectSingle={(id, e) => this.selectSingle(id, e)}
                            changeText={(id, text, e) => this.changeText(id, text, e)}
                            deleteItem={(id, e) => this.deleteItem(id, e)}
                ></TodoList>
                <ToggleBar  todoList={todoList}
                            showMode={showMode}
                            switchAll={(e) => this.switchAll(e)}
                            switchActive={(e) => this.switchActive(e)}
                            switchCompleted={(e) => this.switchCompleted(e)}
                            clearCompleted={(e) => this.clearCompleted(e)}
                ></ToggleBar>
            </div>
        );
    }
}