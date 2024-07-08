import { Button, Flex, Input, Spinner } from '@chakra-ui/react';
import axios from '../axios/axios';
import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";

export default function TodoForm() {

const [newTodo, setNewTodo] = useState<string>("")
const [isPending, setIsPending] = useState<boolean>(false)

const  postTodo  = async () => {

  try {
    setIsPending(true)
    const res = await axios.post('/todos',{body:newTodo})
     setNewTodo("")
    console.log(res.data);
    
  } catch (error) {
    console.log(error)
  } finally {
    setIsPending(false)
  }
}

 const createTodo = async(e: React.FormEvent)=>{
    e.preventDefault()
    alert("Todo added!")
 }
  return (
  <form onSubmit={createTodo}>
  <Flex >
   <Input 
    type='text'
    value={newTodo}
    onChange={(e)=> setNewTodo(e.target.value)}
    ref={(input)=> input && input.focus()}
   />
   <Button
    onClick={postTodo}
   mx={2}
   type='submit'
   _active={{
    transform: "scale(.97)",
   }}
   >
 {isPending ? <Spinner size={"xs"} />:  <IoMdAdd size={30}/>}
   </Button>
  </Flex>
  </form>
);
}
