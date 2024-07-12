import create from 'zustand'


interface Todo {
    id:number;
    text:string;
    completed:boolean;
}

interface TodoStore {
    todos : Todo[]
    addTodo : (todo: Todo) => void
    updateTodo:
}

const useTodoStore = create( (set)=>({

}))