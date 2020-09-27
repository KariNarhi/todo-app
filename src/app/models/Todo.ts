// Model for Todo data
export interface Todo {
  _id: string;
  title: string;
  body: string;
  completed: boolean;
}

// New todo model
export interface NewTodo {
  title: string;
  body: string;
}
