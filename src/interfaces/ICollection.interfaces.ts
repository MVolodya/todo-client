import { ITodo } from './ITodo.interfaces';

export interface ICollection {
  id: number,
  name: string,
  todos: ITodo[]
}

export interface ICollections {
  collections: ICollection[]
};