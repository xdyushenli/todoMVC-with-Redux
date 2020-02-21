import React from 'react';
import Head from './Head.js';
import Container from './Container.js';
import TodoInput from '../containers/TodoInput.js';
import VisibleTodoList from '../containers/VisibleTodoList.js';
import Filters from '../containers/Filters.js';
import '../css/App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Head></Head>
                <Container>
                    <TodoInput />
                    <VisibleTodoList />
                    <Filters />
                </Container>
            </>
        )
    }
}