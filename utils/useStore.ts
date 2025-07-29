import { create } from 'zustand';
import { toDoStore } from './todolistType';

const useTodolistStore = create<toDoStore>((set) => ({
  todo: { id : '', title : ''},
  setTodo: (todo) => set({ todo }),
  todolist: [],
  addTodolist: (newTodo) => set((state) => ({
    todolist : [...state.todolist, newTodo]
  })),
  setTodolist: (list) => set({ todolist : list}),
  selectedList: [],
  toggleSelected: (id) => set((state) => {
    const isSelected = state.selectedList.includes(id);

    return {
      selectedList: isSelected ? state.selectedList.filter(item => item !== id) : [...state.selectedList, id]
    }
  }),
  clearSelectedList: () => set({ selectedList: [] }),
  updateTodo: (id : string, newTitle : string) => set((state) => ({
    todolist: state.todolist.map(item => item.id == id ? { ...item, title: newTitle} : item)
  }))
}));

export default useTodolistStore;