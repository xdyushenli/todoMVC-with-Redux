import React from 'react';
import '../index.css';

export default class ToggleBar extends React.Component{
    constructor(props) {
        super(props);
    }

    handleSwitchAll(e) {
        this.props.switchAll(e);
    }

    handleSwitchActive(e) {
        this.props.switchActive(e);
    }

    handleSwitchCompleted(e) {
        this.props.switchCompleted(e);
    }

    handleClearCompleted(e) {
        this.props.clearCompleted(e);
    }

    render() {
        let itemsNum = 0;
        let todoList = this.props.todoList;
        let showMode = this.props.showMode;

        todoList.map((item) => {
            if(item.isActive) itemsNum += 1;
        })

        return (
            <div id='toggle-bar'>
                <p className='left-items'>{itemsNum} items left</p>
                <div className='toggle-group'>
                    <button className={showMode === 'all' ? 'all-items active' : 'all-items'}
                            onClick={(e) => this.handleSwitchAll(e)}
                    >All</button>
                    <button className={showMode === 'active' ? 'active-items active' : 'active-items'}
                            onClick={(e) => this.handleSwitchActive(e)}                    
                    >Active</button>
                    <button className={showMode === 'completed' ? 'completed-items active' : 'completed-items'}
                            onClick={(e) => this.handleSwitchCompleted(e)}                    
                    >Completed</button>
                </div>
                <button className='clear-completed'
                        onClick={(e) => this.handleClearCompleted(e)}
                >Clear completed</button>
            </div>
        )
    }
}