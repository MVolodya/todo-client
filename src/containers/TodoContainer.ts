import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import TodoComponent from 'src/components/TodoComponent';
import { ICollections } from 'src/interfaces/ICollection.interfaces';
import { addTodo, deleteTodo, doneTodo } from '../actions/index';

const mapStateToProps = (state: ICollections, ownProps: any) => {
  // tslint:disable-next-line:no-console
  console.log(ownProps)
  return {
  collection: state.collections.find(i => i.id === Number(ownProps.match.params.collectionId)),
}}

const mapDispatchToProps = (dispatch: Dispatch) => {
 return bindActionCreators({
   addTodo,
   doneTodo,
   deleteTodo
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);