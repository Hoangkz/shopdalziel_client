import { Box, Flex, List, ListItem, Icon, Input, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

import { Link } from "react-router-dom";
import './header.css';
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home(){
    const isLogined = useSelector((state) => state.user.isLogined);
    // console.log(isLogined)
    const [search, setSearch] = useState();
    const handleChangeInput = (e) =>{
        setSearch(e.target.value);
    }
    const handleClick = () =>{
        console.log(search)
    }
    const role =3;
    return (
        <>  
            <Box position={"fixed"} w="100%"zIndex={1} background={"linear-gradient(0, #fe6433, #f53e2d);"}>
                <Box w="75%"margin="auto" fontSize={14}>
                    <Flex justify={"space-between"} >
                        <List style={{"display":"flex"}} margin="0"padding={0}>
                            <ListItem margin="8px" className="navItem">
                                <Link to="/" style={{"textDecoration":"none","color":"#fff"}}>Home</Link>
                            </ListItem>
                            <ListItem className="navItem" margin="8px">
                                <Link to="/" style={{"textDecoration":"none","color":"#fff"}}>Tải ứng dụng</Link>
                            </ListItem>
                            <ListItem  margin="8px" color="#fff" cursor={"inherit"}>
                                Kết nối 
                            </ListItem>
                            <ListItem className="navItem" color="#fff" fontSize="20px">
                                <Link to="/" style={{"textDecoration":"none","color":"#fff"}}><Icon as={FaFacebook}/></Link>
                            </ListItem>
                            <ListItem className="navItem" color="#fff" fontSize="20px">
                                <Link to="/" style={{"textDecoration":"none","color":"#fff"}}><Icon as={FaGoogle}/></Link>
                            </ListItem>
                        </List>
                        <List style={{"display":"flex"}} margin="0" padding={0}>
                            <ListItem className="navItem" margin="8px">
                                <Link to="/" style={{"textDecoration":"none","color":"#fff"}}>Thông báo</Link>
                            </ListItem>
                            <ListItem className="navItem" margin="8px">
                                <Link to="tel:0968823201" target={"_blank"} style={{"textDecoration":"none","color":"#fff"}}>Hỗ trợ</Link>
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
                                <ListItem margin="8px" position={"relative"}>
                                    <Accordion allowMultiple>
                                        <AccordionItem>
                                            <AccordionButton className="navItem" backgroundColor={"transparent"} border="none" fontSize={16} cursor="pointer">
                                                <Box style={{"textDecoration":"none","color":"#fff","fontWeight":"700"}}>UserName</Box>
                                                <AccordionIcon color={"#fff"} fontSize={18} />
                                            </AccordionButton>
                                            <AccordionPanel pb={4} w="200px" position={"absolute"} top="24px" right="-50%"zIndex={1} backgroundColor={"#fff"}> 
                                                <List p={0}>
                                                    <ListItem className="navItem_hover">
                                                        <Link to="/" style={{"display":"block","padding":"8px 20px","color":"black","fontSize":"1rem"}}>
                                                            Tài khoản
                                                        </Link>
                                                    </ListItem> 
                                                    {role===1?(
                                                        <>
                                                            <ListItem className="navItem_hover">
                                                                <Link to="/" style={{"display":"block","padding":"8px 20px","color":"black","fontSize":"1rem"}}>
                                                                    Giỏ hàng của tôi
                                                                </Link>
                                                            </ListItem>
                                                            <ListItem className="navItem_hover">
                                                                <Link to="/" style={{"display":"block","padding":"8px 20px","color":"black","fontSize":"1rem"}}>
                                                                    Đơn hàng của tôi
                                                                </Link>
                                                            </ListItem>
                                                        </>
                                                    ):role===2?(
                                                        <ListItem className="navItem_hover">
                                                            <Link to="/" style={{"display":"block","padding":"8px 20px","color":"black","fontSize":"1rem"}}>
                                                                Quản lý đơn hàng
                                                            </Link>
                                                        </ListItem>
                                                    ):role===3?(
                                                        <>
                                                            <ListItem className="navItem_hover">
                                                                <Link to="/" style={{"display":"block","padding":"8px 20px","color":"black","fontSize":"1rem"}}>
                                                                    Quản lý đơn hàng
                                                                </Link>
                                                            </ListItem>
                                                            <ListItem className="navItem_hover">
                                                                <Link to="/" style={{"display":"block","padding":"8px 20px","color":"black","fontSize":"1rem"}}>
                                                                    Danh sách Account
                                                                </Link>
                                                            </ListItem>
                                                            <ListItem className="navItem_hover">
                                                                <Link to="/" style={{"display":"block","padding":"8px 20px","color":"black","fontSize":"1rem"}}>
                                                                    Danh sách sản phẩm
                                                                </Link>
                                                            </ListItem>
                                                        </>
                                                    ):(null)}


                                                    <ListItem className="navItem_hover">
                                                        <Link to="/" style={{"display":"block","padding":"8px 20px","color":"black","fontSize":"1rem"}}>
                                                            Đăng xuất
                                                        </Link>
                                                    </ListItem>
                                                </List>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </ListItem>)
                            }
                        </List>
                    </Flex>
                </Box>
                <Box w="80%" margin="auto" mt={4} pb={0}>
                    <Flex justify={"space-between"}>
                        <Box fontSize="2.5rem" color="#fff" >
                            <Link to={"/"} style={{"color":"#fff"}} className="navItem">
                                <Icon as ={BsFillBagCheckFill}mt="-15px" bg="" color="#fff"/>
                                Dalziel
                            </Link>
                        </Box>
                        <Box w="75%">
                            <Input onChange={handleChangeInput} w="75%" placeholder='Search'outline="none" backgroundColor={"#fff"}/>
                            <Button onClick={handleClick} mx={4} mb={2} borderRadius={6} color='#fff' variant='outline' _hover={{"backgroundColor":"#f53e2d"}}>Search</Button>
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