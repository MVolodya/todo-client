import * as React from 'react';
import { Component } from 'react';
import { ITodos } from 'src/interfaces/ITodos.interfaces';

class TodoListComponent extends Component<ITodos>{

  public renderTodos() {
    return this.props.todos.map(i => <li key={i.id}>{i.text}</li>)
  }

  public render() {
    return (
      <ul>
        { this.renderTodos() }
      </ul>
    )
  }
}

export default TodoListComponent;