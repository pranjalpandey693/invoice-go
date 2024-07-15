import { Flex, Spinner, Stack, Text } from '@chakra-ui/react';
import  {  useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import useTodoStore  from './useTodoStore'

export type Todo = {
   ID: string;
  Body: string;
  completed: boolean;
}


export default function TodoList() {
  const [isLoading , setIsloading] = useState<boolean>(false)

const todos = useTodoStore((state)=> state.todos)
const {fetchTodos} = useTodoStore()

  useEffect (()=>{
    fetchTodos()
  },[fetchTodos])
  


 
    return (
   <>
   
   <Text
    bgGradient={'linear(to-l,#0b85f8,#00ffff)'} 
    bgClip={'text'}
    fontSize={"4xl"} 
    textTransform={"uppercase"}
    fontWeight={"bold"} 
    textAlign={'center'} 
    my={2}  >
    Today's Tasks
   </Text>
   {isLoading && (
    <Flex justifyContent={'center'} my={4} >
        <Spinner size={"xl"}/>
    </Flex>
   )}
   {!isLoading && todos?.length === 0 && (
      <Stack alignItems={'center'} gap='3'>
        <Text fontSize={'xl'} textAlign={'center'} color={'gray.500'} >
         All tasks completed!
        </Text>
      </Stack>
   )}
   <Stack gap={3} >
   {todos?.map((todo)=>(
   
    <TodoItem key={todo.ID} todo={todo}/>
   ))}
   </Stack>
   </>
  );
}

