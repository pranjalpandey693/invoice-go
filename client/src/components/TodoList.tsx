import { Flex, Spinner, Stack, Text } from '@chakra-ui/react';
import  { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import axios from '../axios/axios';

export type Todo = {
   ID: string;
  Body: string;
  completed: boolean;
}


export default function TodoList() {
  const [isLoading , setIsloading] = useState<boolean>(false)
  const [todos, setTodo] = useState<Todo[]>([])
  
  useEffect(()=>{
   async function getTodo(){
   try {
    setIsloading(true)
    const res = await axios.get('/todos')
    setTodo(res.data)
   
    
  } catch (error) {
    console.log(error)
  } finally {
    setIsloading(false)
  }

   }
   getTodo()

  },[])
    
  



 
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

