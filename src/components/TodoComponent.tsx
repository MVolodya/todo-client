import * as React from 'react';
import { Component } from 'react';
import { ITodos } from 'src/interfaces/ITodos.interfaces';
import TodoListComponent from './TodoListComponent';

interface IProps extends ITodos {
  doneTodo: (id: number) => void
};
class TodoComponent extends Component<IProps> {

  public renderTodoList() {
   return this.props.todos.map(i =>
     <TodoListComponent key={i.id} id={i.id} text={i.text} done={i.done} 
     // tslint:disable-next-line:jsx-no-lambda
     click={ () => this.props.doneTodo(i.id) } />)
  }

  public render() {
    return (
      <div>
        <h2>Todos:</h2>
        <ul>
          { this.renderTodoList() }
        </ul>
      </div>
    )
  }
};

export default TodoComponent;