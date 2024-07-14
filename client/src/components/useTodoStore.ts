import {create} from 'zustand'

interface Todo {
    ID: string;
  Body: string;
  completed: boolean;
}


interface TodoStore {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    updateTodo: (id:string, updatedTodo:Todo)=> void; 
    deleteTodo: (id: string) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    addTodo: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo] })),
     updateTodo: (id:string , updatedTodo: Todo)=> set((state)=>({
        todos: state.todos.map((todo)=>
        todo.ID === id ? updatedTodo : todo 
        )
     })),
    deleteTodo: (id: string) => set((state) => ({
        todos: state.todos.filter((todo) => todo.ID !== id)
    })),
}))

export default useTodoStore;