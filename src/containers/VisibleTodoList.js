import { connect } from 'react-redux';
import { toggleTodo, editTodo, deleteTodo } from '../redux/actions.js'
import List from '../components/List.js';

const mapStateToProps = state => {
    switch (state.filter) {
        case 'SHOW_COMPLETED': {
            return {
                todos: state.todos.filter(todo => todo.completed),
            }
        }
        case 'SHOW_ACTIVE': {
            return {
                todos: state.todos.filter(todo => !todo.completed),
            }
        }
        case 'SHOW_ALL':
        default: {
            return {
                todos: state.todos,
            }
        }
    }
}

function mapDispatchToProps (dispatch, ownProps) {
    return {
        toggleTodo: function (e) {
            // todo 项目的 id
            let todoId = this.id;
            dispatch(toggleTodo(todoId));
        },
        editTodo: function (e) {
            let text = e.currentTarget.value.trim();
            let todoId = this.id;

            // 空字符串时不改变当前项目
            if (text.length > 0) {
                dispatch(editTodo(todoId, text))
            }
        },
        deleteTodo: function (e) {
            let todoId = this.id;
            dispatch(deleteTodo(todoId))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(List);