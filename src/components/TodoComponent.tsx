import * as React from 'react';
import { Component } from 'react';
import { ITodos } from 'src/interfaces/ITodos.interfaces';
import TodoListComponent from './TodoListComponent';


class TodoComponent extends Component<ITodos> {

  public render() {

    return (
      <div>
        <h2>Todos:</h2>
        <TodoListComponent todos={this.props.todos}/>
      </div>
    )
  }
}

export default TodoComponent;