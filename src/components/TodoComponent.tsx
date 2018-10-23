import * as React from 'react';
import { Component } from 'react';
import { ICollection } from 'src/interfaces/ICollection.interfaces';
import TodoListComponent from './TodoListComponent';

interface IProps extends ICollection {
  addTodo: (collectionId: number, text: string) => void,
  doneTodo: (collectionId: number, todoId: number) => void,
  deleteTodo: (collectionId: number, todoId: number) => void,
  collection: ICollection
};

interface IState {
  value: string
};

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
    const { collection } = this.props
    if(!collection.todos.length) {
      return <div>Add new todo...</div>
    }

   return collection.todos.map(i =>
    <TodoListComponent
      key={i.id}
      id={i.id}
      text={i.text}
      done={i.done} 
      // tslint:disable-next-line:jsx-no-lambda
      onClickDone={ () => this.props.doneTodo(collection.id, i.id) }
       // tslint:disable-next-line:jsx-no-lambda
      onClickDelete= { () => this.props.deleteTodo(collection.id, i.id) }
      />
    )
  };

  public render() {
    const { onChangeInput, creteTodo } = this
    return (
      <span>
        <h1 className='todo todo__header'>{this.props.collection.name}</h1>
        <input
          className='todo__input'
          type='text'
          placeholder='name of todo'
          value={ this.state.value }
          onChange={ onChangeInput }
        />
        <button onClick={ creteTodo }>new todo</button>
        <h2>Todos:</h2>
        <ul>{ this.renderTodoList() }</ul>
      </span>
    )
  };

  private creteTodo() {
    const value = this.state.value.trim()
    this.props.addTodo(this.props.collection.id, value)
    this.setState({ value: '' })
  };

  private updateValue(value: string) {
    this.setState({ value })
  };

  private onChangeInput(e: any) {
    this.updateValue(e.target.value)
  };

  // private checkName()

};

export default TodoComponent;