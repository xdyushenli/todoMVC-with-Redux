import React from 'react';
import '../css/Head.css';

export default class Head extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 id="head">todos</h1>
        )
    }
}