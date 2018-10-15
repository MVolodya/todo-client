import * as React from 'react';
import { ITodo } from 'src/interfaces/ITodos.interfaces';

interface IProps extends ITodo {
  onClickDone: any,
  onClickDelete: any
};

const TodoListComponent = (props: IProps) => {
  return (
    <li key={props.id}>
      <input type="checkbox" checked={props.done} onChange={props.onClickDone} />
      {props.text}
      <button onClick={props.onClickDelete}>delete</button>
    </li>
  )
};

export default TodoListComponent;