import { Flex, Spinner, Stack, Text } from '@chakra-ui/react';
import  { useState } from 'react';
import TodoItem from './TodoItem';


export default function TodoList() {
  const [isLoading , setIsloading] = useState(true)
  const todos = [
    {
        _id:1,
        body:"buy groceries",
        completed: true,
    },
    {
        _id:2,
        body:"walk the dog",
        completed: true,
    },
    {
        _id:3,
        body:" buy phone",
        completed: true,
    },
    {
        _id:4,
        body:"do laundry",
        completed: true,
    },
    {
        _id:5,
        body:" read a book",
        completed: true,
    },
    {
        _id:6,
        body:" go to gym ",
        completed: true,
    },
  ]
    return (
   <>
   
   <Text fontSize={"4xl"} textTransform={"uppercase"} fontWeight={"bold"} textAlign={'center'} my={2}  >
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
    <TodoItem key={todo._id} todo={todo}/>
   ))}
   </Stack>
   </>
  );
}
