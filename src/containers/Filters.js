import { connect } from 'react-redux';
import { setFilter, clearCompleted } from '../redux/actions.js';
import ListFooter from '../components/ListFooter.js';

const mapStateToProps = state => {
    switch (state.filter) {
        case 'SHOW_ACTIVE': {
            return {
                todoCount: state.todos.reduce((count, todo) => {
                    if (!todo.completed) {
                        return count + 1;
                    } else {
                        return count;
                    }
                }, 0),
                filter: state.filter,
            }
        }
        case 'SHOW_COMPLETED': {
            return {
                todoCount: state.todos.reduce((count, todo) => {
                    if (todo.completed) {
                        return count + 1;
                    } else {
                        return count;
                    }
                }, 0),
                filter: state.filter,
            }
        }
        case 'SHOW_ALL':
        default: {
            return {
                todoCount: state.todos.length,
                filter: state.filter,
            }
        }
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        setFilter: function (e) {
            const { filter } = e.currentTarget.dataset;
            dispatch(setFilter(filter));
        },
        clearCompleted: function (e) {
            dispatch(clearCompleted());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListFooter);