import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import TodoComponent from 'src/components/TodoComponent';
import { ITodos } from '../interfaces/ITodos.interfaces';
import { addTodo, doneTodo } from './../actions/index';

const mapStateToProps = (state: ITodos) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch) => {
 return bindActionCreators({
   addTodo,
   doneTodo
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);