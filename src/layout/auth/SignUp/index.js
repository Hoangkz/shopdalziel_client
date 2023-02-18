import { Box, Flex, Icon } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../auth.css"

export default function SignUp() {
    return (
        <>
            <Box boxSizing="inherit">
                <Flex  position={"fixed"} top="0"left="0"bottom="0"right="0" backgroundColor={'antiquewhite'} >
                    <Box position={"absolute"} w="100%" h={"100%"} backgroundColor="rgba(0,0,0,0.1)" >

                    </Box>
                    <Box m={"auto"} w="100%" h="100%">
                        <Box width={400}margin="32px auto"padding={"32px"} h="100px" backgroundColor="#fff" borderRadius={6}>
                            <Box>
                                <Link to={"/"}>
                                    <Box textAlign={"center"}>
                                        <Icon fontSize="2.5rem" color={"#fe6433"} as={AiOutlineShoppingCart}/>
                                        <Box color={"#fe6433"} fontWeight="700" mt={"-4px"}>
                                            Dalziel
                                        </Box>
                                    </Box>
                                </Link>
                            </Box>

                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}