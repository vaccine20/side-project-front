export type toDoListType = {
  id : string
  title : string
  created_at? : string
  updated_at? : string
}

export type toDoStore = {
  todo: toDoListType;
  setTodo: (todo: toDoListType) => void;
  todolist: toDoListType[];
  addTodolist: (newTodo: toDoListType) => void;
  setTodolist: (list: toDoListType[]) => void;
  selectedList: string[];
  toggleSelected: (id: string) => void;
  clearSelectedList: () => void;
  updateTodo: (id: string, newTitle: string) => void;
};