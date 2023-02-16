import { Box, Flex, List, ListItem, Icon, Input, Button } from "@chakra-ui/react";
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

import { Link } from "react-router-dom";
import './header.css';
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home(){
    let isLogined = useSelector((state) => state.user.isLogined);
    console.log(isLogined)
    isLogined = true;
    const [search, setSearch] = useState();
    const handleChangeInput = (e) =>{
        setSearch(e.target.value);
    }
    const handleClick = () =>{
        console.log(search)
    }
    return (
        <>
            <Box background={"linear-gradient(0, #fe6433, #f53e2d);"}>
                <Box w="75%"margin="auto" fontSize={14}>
                    <Flex justify={"space-between"} >
                        <List style={{"display":"flex"}} margin="0"padding={0}>
                            <ListItem margin="8px" className="navItem">
                                <Link to="/" style={{"textDecoration":"none","color":"#fff"}}>Home</Link>
                            </ListItem>
                            <ListItem className="navItem" margin="8px">
                                <Link to="/" style={{"textDecoration":"none","color":"#fff"}}>Tải ứng dụng</Link>
                            </ListItem>
                            <ListItem marginX={6} marginY={8} color="#fff" cursor={"inherit"}>
                                Kết nối 
                            </ListItem>
                            <ListItem className="navItem" marginX={1} marginY={8} color="#fff" marginTop={8} fontSize="18px">
                                <Link to="/" style={{"textDecoration":"none","color":"#fff"}}><Icon as={FaFacebook}/></Link>
                            </ListItem>
                            <ListItem className="navItem" marginX={1} marginY={8} color="#fff" marginTop={8} fontSize="18px">
                                <Link to="/" style={{"textDecoration":"none","color":"#fff"}}><Icon as={FaGoogle}/></Link>
                            </ListItem>
                        </List>
                        <List style={{"display":"flex"}} margin="0" padding={0}>
                            <ListItem className="navItem" margin="8px">
                                <Link to="/" style={{"textDecoration":"none","color":"#fff"}}>Thông báo</Link>
                            </ListItem>
                            <ListItem className="navItem" margin="8px">
                                <a href="tel:0968823201" target={"_blank"} style={{"textDecoration":"none","color":"#fff"}}>Hỗ trợ</a>
                            </ListItem>
                            {!isLogined? (
                                <ListItem className="navItem" margin="8px">
                                    <Link to="/" style={{"textDecoration":"none","color":"#fff"}}>Đăng ký</Link>
                                </ListItem>
                                ):(
                                <ListItem className="navItem" margin="8px">
                                </ListItem>)
                            }
                            {!isLogined? (
                                <ListItem className="navItem" margin="8px">
                                    <Link to="/" style={{"textDecoration":"none","color":"#fff"}}>Đăng nhập</Link>
                                </ListItem>
                                ):(
                                <ListItem className="navItem" margin="8px">
                                    <Box style={{"textDecoration":"none","color":"#fff","fontWeight":"700"}}>UserName</Box>
                                </ListItem>)
                            }
                        </List>
                    </Flex>
                </Box>
                <Box w="80%" margin="auto" mt={10} pb={0}>
                    <Flex justify={"space-between"}>
                        <Box fontSize="2.5rem" color="#fff" >
                            <Link to={"/"} style={{"color":"#fff"}} className="navItem">
                                <Icon as ={BsFillBagCheckFill} bg="" color="#fff"/>
                                Dalziel
                            </Link>
                        </Box>
                        <Box w="75%">
                            <Input onChange={handleChangeInput} w="75%" placeholder='Search' h={40}fontSize="1.1rem" borderRadius={6} outline="none" border={1}paddingX="8px"/>
                            <Button onClick={handleClick} className="buttonNavbar" mx={4} h={40} borderRadius={6} outline="none" border="1px solid #fff" color="#fff" paddingX="8px" background='transparent' >Search</Button>
                        </Box>
                        <Box fontSize="2.5rem" color="#fff" className="navItem">
                            <Icon as ={AiOutlineShoppingCart}/>
                        </Box>
                    </Flex>
                </Box>
                <Box h={4}>

                </Box>
            </Box>
        </>
    )
}