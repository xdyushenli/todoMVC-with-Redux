import React from 'react';
import '../index.css';

export default class TodoItem extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            inputText: '',
        }
    }

    handleSelectSingle(e) {
        this.props.selectSingle(this.props.item.id, e);
    }

    showInput(e) {
        this.setState({editing: true});
    }

    handleChangeText(e) {
        this.setState({inputText: e.target.value});
    }

    handleInputCompleted(e) {
        let inputText = this.state.inputText;

        if(e.key === 'Enter' || e.type === 'blur') {
            this.setState({
                editing: false,
                inputText: '',
            });
            this.props.changeText(this.props.item.id, inputText, e);
        }
    }

    handleDeleteItem(e) {
        this.props.deleteItem(this.props.item.id, e);
    }

    render() {
        let item = this.props.item;
        let editing = this.state.editing;

        return (
            <li className='todo-item'>
                <button className={item.isActive ? 'finish-btn' : 'finish-btn finished-btn'}
                        onClick={(e) => this.handleSelectSingle(e)}
                ></button>
                <div    className={item.isActive ? 'item-text' : 'item-text finished-text'}
                        onDoubleClick={(e) => this.showInput(e)}
                >{  
                    editing ? 
                    <input  className='change-text' 
                            placeholder={item.text} 
                            onChange={(e) => this.handleChangeText(e)}
                            onKeyPress={(e) => this.handleInputCompleted(e)}
                            onBlur={(e) => this.handleInputCompleted(e)}
                            value={this.state.inputText} /> :
                    item.text
                }</div>
                <button className='delete-btn'
                        onClick={(e) => this.handleDeleteItem(e)}
                >✕</button>
            </li>
        );
    }
}