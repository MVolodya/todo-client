import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ActionTypes from 'src/actions';
import TodoComponent from "src/components/TodoComponent";
import { ITodos } from '../interfaces/ITodos.interfaces';

const mapStateToProps = (state: ITodos) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  doneTodo: (id: number) => dispatch({type: ActionTypes.DONE_TODO, payload: id})
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);