import { connect } from 'react-redux';
import { selectAll, addTodo } from '../redux/actions.js';
import Input from '../components/Input.js';

const mapStateToProps = state => {}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        selectAll: function (e) {
            dispatch(selectAll());
        },
        addTodo: function (e) {
            if (e.key === 'Enter') {
                let text = e.currentTarget.value;
                // 清空输入框
                e.currentTarget.value = '';
                dispatch(addTodo(text));
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Input);