import { Button, Flex, Input, Spinner } from "@chakra-ui/react";
// import axios from '../axios/axios';
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import useTodoStore from "./useTodoStore";

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean>(false);
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);

  function generateIdUsingDate() {
    const now = new Date();

    // Get individual components of the date and time
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
    const day = now.getDate().toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const milliseconds = now.getMilliseconds().toString().padStart(3, "0");

    // Concatenate all components to form the ID
    return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
  }

  const handleAddTodo = () => {
    addTodo({
      ID: generateIdUsingDate(),
      Body: newTodo,
      completed: false,
    });
    setNewTodo("")
  };

  const createTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("Todo added!");
  };
  return (
    <form onSubmit={createTodo}>
      <Flex>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          ref={(input) => input && input.focus()}
        />
        <Button
          onClick={handleAddTodo}
          mx={2}
          type="submit"
          _active={{
            transform: "scale(.97)",
          }}
        >
          {isPending ? <Spinner size={"xs"} /> : <IoMdAdd size={30} />}
        </Button>
      </Flex>
    </form>
  );
}

fkldsjflsdjf