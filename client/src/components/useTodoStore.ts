import {create} from 'zustand'

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoStore {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    updateTodo: (id: number, updatedTodo: Partial<Todo>) => void;
    deleteTodo: (id: number) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    addTodo: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo] })),
    updateTodo: (id: number, updatedTodo: Partial<Todo>) => set((state) => ({
        todos: state.todos.map((todo) => 
            todo.id === id ? { ...todo, ...updatedTodo } : todo
        )
    })),
    deleteTodo: (id: number) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
    })),
}))

export default useTodoStore;