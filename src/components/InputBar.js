import React from 'react';
import '../index.css';

export default class InputBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {inputText: ''};
    }

    handleSelectAll() {
        this.props.selectAll();
    }

    handleInputText(e) {
        this.setState({inputText: e.target.value});
    }

    handleAddItem(e) {
        if(e.key === "Enter") {
            this.props.addItem(this.state.inputText);
            this.setState({inputText: ""});
        }
    }

    render() {
        return ( 
            <div id='input-bar'>
                <div    className='select-all-btn'
                        onClick={() => this.handleSelectAll()}
                ></div>
                <input  type="text" 
                        className='input-box' 
                        placeholder='What needs to be done?'
                        value={this.state.inputText} 
                        onChange={(e) => this.handleInputText(e)}  
                        onKeyPress={(e) => this.handleAddItem(e)}     
                />
            </div>
        );
    }
}