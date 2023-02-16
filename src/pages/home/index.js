import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import data  from "../../layout/danh_muc_sp";
import { Link } from "react-router-dom";
import "./home.css"
export default function Home(){
    return(
        <>
            <Header/>
            <Box backgroundColor="antiquewhite" py={50} >
                <Box backgroundColor="#fff" w="77%" mx={"auto"}>
                    <Box color="rgb(149, 147, 147);">
                        <Heading fontSize="1.25rem" lineHeight={1.2} fontWeight="500" p="16px" m={0}>DANH MỤC</Heading>
                    </Box>
                    <Flex flexWrap={"wrap"}justify="space-around">
                        {data.map((item)=>{
                            return(
                                <Box className="danhmuchover" border="1px solid rgba(0,0,0,.125)" w="124px" borderRadius="0.25rem">
                                    <Link to={`/listItems/${item.desc}`}>
                                        <Image src={item.img} w="124px"></Image>
                                        <Box className="col" w="124px" h={48} textAlign={"center"} color="black">
                                            {item.desc}
                                        </Box>
                                    </Link>
                                </Box>
                            )
                        })}
                    </Flex>
                </Box>
            </Box>
            <Footer/>
        </>
    )
}