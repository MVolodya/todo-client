import { connect } from 'react-redux';
import TodoComponent from "src/components/TodoComponent";
import { ITodos } from '../interfaces/ITodos.interfaces';


const mapStateToProps = (state: ITodos) => ({
  todos: state.todos
})


export default connect(mapStateToProps)(TodoComponent);