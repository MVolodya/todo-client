export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  DONE_TODO = 'DONE_TODO',
  REMOVE_TODO = 'REMOVE_TODO'
};

let nextID = 3;

export const addTodo = (text: string) => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    todo: {
      id: nextID++,
      text,
      done: false
    }
  }
});

export const doneTodo = (id: number) => ({
  type: ActionTypes.DONE_TODO,
  payload: id
});