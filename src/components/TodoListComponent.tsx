import * as React from 'react';
import { ITodo } from 'src/interfaces/ITodos.interfaces';

interface IProps extends ITodo {
  click: any
};

const TodoListComponent = (props: IProps) => {
  return (
    <li key={props.id}><input type="checkbox" checked={props.done} onChange={props.click} />{props.text}</li>
  )
};

export default TodoListComponent;