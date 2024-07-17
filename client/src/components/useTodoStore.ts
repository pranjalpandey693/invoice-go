import {create} from 'zustand'
import axios from '../axios/axios'

interface Todo {
    ID: string;
  Body: string;
  completed: boolean;
}


interface TodoStore {
    todos: Todo[];
    fetchTodos:()=> Promise<void>
    // addTodo: (Todo:Pick<Todo, 'Body'>)=> Promise<void>
    // updateTodo: (id:string)=> Promise<void>; 
    // deleteTodo: (id: string) => Promise<void>;
}

const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    fetchTodos: async () => {
        try {
            const res = await axios.get<Todo[]>('/todos')
            set({todos:res.data})
            
        } catch (error) {
          console.log("error fetching todos", error)
        }
    },
    addTodo: async ()=> {
        try {
            
        } catch (error) {
            
        }
    }
  
}))

export default useTodoStore;