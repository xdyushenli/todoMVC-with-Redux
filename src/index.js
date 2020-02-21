import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App.js';
import todoReducers from './redux/reducers.js'

// 初始状态待更改 TODO
const store = createStore(todoReducers, {
    todos: [],
    filter: 'SHOW_ALL',
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);