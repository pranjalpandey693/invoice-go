import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Todo } from "./TodoList";
import useTodoStore from "./useTodoStore";

export default function TodoItem({ todo }: { todo: Todo }) {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const handleupdateTodo = (id: string, todo: Todo) => {
    const updatedtodo = {
      ID: todo.ID,
      Body: todo.Body,
      completed: true,
    };
    updateTodo(id, updatedtodo);
  };
  return (
    <>
      <Flex gap={2} alignItems={"center"}>
        <Flex
          flex={1}
          alignItems={"center"}
          border={"1px"}
          borderColor={"gray.600"}
          p={2}
          borderRadius={"lg"}
          justifyContent={"space-between"}
        >
          <Text
            color={todo.completed ? "green.200" : "yellow.100"}
            textDecoration={todo.completed ? "line-through" : "none"}
          >
            {todo.Body}
          </Text>
          {todo.completed && (
            <Badge ml="1" colorScheme="green">
              Done
            </Badge>
          )}
          {!todo.completed && (
            <Badge ml="1" colorScheme="yellow">
              In progress
            </Badge>
          )}
        </Flex>
        <Flex gap={2} alignItems={"center"}>
          <Box
            onClick={() => handleupdateTodo(todo.ID, todo)}
            color={"green.500"}
            cursor={"pointer"}
          >
            <FaCheckCircle size={20} />
          </Box>
          <Box
            onClick={() => deleteTodo(todo.ID)}
            color={"red.500"}
            cursor={"pointer"}
          >
            <MdDelete size={25} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
