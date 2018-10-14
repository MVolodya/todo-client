export interface ITodo {
  id: number,
  text: string,
  done: boolean
};

export interface ITodos {
  todos: ITodo[]
};