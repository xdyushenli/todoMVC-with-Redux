import React from 'react';
import '../css/Container.css';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='container'>
                {
                    this.props.children
                }
            </div>
        )
    }
}