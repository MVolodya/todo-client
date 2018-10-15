import * as React from 'react';
import { Component } from 'react';
import { ITodos } from 'src/interfaces/ITodos.interfaces';
import TodoListComponent from './TodoListComponent';

interface IProps extends ITodos {
  addTodo: (text: string) => void,
  doneTodo: (id: number) => void,
  deleteTodo: (id: number) => void
};

interface IState {
  value: string
}
class TodoComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      value: '',
    }

    this.updateValue = this.updateValue.bind(this)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.creteTodo = this.creteTodo.bind(this)
  };

  public renderTodoList() {
   return this.props.todos.map(i =>
    <TodoListComponent
      key={i.id}
      id={i.id}
      text={i.text}
      done={i.done} 
      // tslint:disable-next-line:jsx-no-lambda
      onClickDone={ () => this.props.doneTodo(i.id) }
       // tslint:disable-next-line:jsx-no-lambda
      onClickDelete= { () => this.props.deleteTodo(i.id) }
      />
    )
  };

  public render() {
    const { onChangeInput, creteTodo } = this
    return (
      <div>
        <input
          type='text'
          placeholder='name of todo'
          value={ this.state.value }
          onChange={ onChangeInput }
        />
        <button onClick={ creteTodo }>new todo</button>
        <h2>Todos:</h2>
        <ul>{ this.renderTodoList() }</ul>
      </div>
    )
  }

  private creteTodo() {
    this.props.addTodo(this.state.value)
    this.setState({ value: '' })
  }

  private updateValue(value: string) {
    this.setState({ value })
  };

  private onChangeInput(e: any) {
    this.updateValue(e.target.value)
  };

};

export default TodoComponent;