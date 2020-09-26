// Model for Todo data
export class Todo {
  _id: string;
  title: string;
  body: string;
  completed: boolean;
}

// New todo model
export class NewTodo {
  title: string;
  body: string;
}
