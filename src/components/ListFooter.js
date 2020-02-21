import React from 'react';
import '../css/Footer.css';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='filters'>
                <span className='count'>
                    {this.props.todoCount} items left
                </span>
                <div className='filter-btns'>
                    <a
                        data-filter='SHOW_ALL'
                        className={this.props.filter === 'SHOW_ALL' ? 'filter selected' : 'filter'}
                        onClick={(e) => this.props.setFilter(e)}
                    >All</a>
                    <a 
                        data-filter='SHOW_ACTIVE' 
                        className={this.props.filter === 'SHOW_ACTIVE' ? 'filter selected' : 'filter'} 
                        onClick={(e) => this.props.setFilter(e)}
                    >Active</a>
                    <a 
                        data-filter='SHOW_COMPLETED' 
                        className={this.props.filter === 'SHOW_COMPLETED' ? 'filter selected' : 'filter'} 
                        onClick={(e) => this.props.setFilter(e)}
                    >Completed</a>
                </div>
                <a
                    className='clear-btn'
                    onClick={e => this.props.clearCompleted(e)}
                >Clear Completed</a>
            </div>
        )
    }
}