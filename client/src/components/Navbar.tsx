import { Box,Container, Text, Flex, useColorMode, useColorModeValue, Button } from "@chakra-ui/react";
import { FaBook } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

export default function Navbar(){

    const { colorMode , toggleColorMode} = useColorMode()

    return (
        <Container maxW={"900px"} >
         <Box bg={useColorModeValue("gray.400","gray.700")} px={4} my={4} borderRadius={"5"} >
     <Flex h={16} align={"center"} justifyContent={"space-between"} >
        <Flex 
        justifyContent={'center'}
        alignItems={'center'}
        gap={3}
        >
          <FaBook/>
          <Text>Todo list</Text>
        </Flex>

        <Flex  
        justifyContent={'center'}
        alignItems={'center'}
        gap={3}>
          <Button onClick={toggleColorMode}>
            {colorMode ==="light"?  <IoMoon/> : <LuSun size={20}/> }
          </Button>
        </Flex>
     </Flex>
         </Box>
        </Container>
    
    )
}