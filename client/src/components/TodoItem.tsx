import { Flex, Text } from '@chakra-ui/react';

export default function TodoItem( {todo}:{todo:any}) {
  return (
    <>
    <Flex gap={2} alignItems={'center'}>
    <Flex
      flex={1}
    alignItems={'center'}
    border={'1px'}
    borderColor={'gray.600'}
    p={2}
    borderRadius={'lg'}
    justifyContent={'space-between'}
    >
   <Text 
   color={todo.completed ? 'green.200' : 'yellow.100'}
   textDecoration={todo.completed ? 'line-through' : 'none'}
   >
    {todo.body}
   </Text>

    </Flex>
    </Flex>
    </>
  );
}
