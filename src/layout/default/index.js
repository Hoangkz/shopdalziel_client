import Header from "../header";
import Footer from "../footer";
import { Box } from "@chakra-ui/react";

export default function Default({children}){

    return (
        <Box>
            <Header/>
            <Box backgroundColor="antiquewhite" pt={170}>
                {children}
            </Box>
            <Box backgroundColor="antiquewhite" pt={50} ></Box>
            <Footer/>
        </Box>
    )

}