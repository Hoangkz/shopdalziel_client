import { Box, Button, Flex, Icon, Input } from "@chakra-ui/react";
import { AiFillFacebook, AiOutlineShoppingCart } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import "../auth.css"
import React, { startTransition } from 'react';
import { useState } from "react";
import authApi from "../../../API/authApi";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

export default function SignUp() {
    const handleClickGoBack=()=> {
        startTransition(() => {
            window.history.back();
        });
    }

    const navigate = useNavigate();

    const [formUserName, setFormUserName] = useState("");
    const [formPassword, setFormPassword] = useState("");

    const handleChangeFormUserName = (e) => {
        const value = e.target.value;
        setFormUserName(value);
    }

    const handleChangeFormPassword = (e) => {
        const value = e.target.value;
        setFormPassword(value);
    }
    const handSubmitForm = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('username', formUserName);
        formData.append('password', formPassword);

        authApi.login(formData)
        .then(response => {
            toast.success(response.data.message);
            // navigate('/auth/login');
            const token = response.data.token;
            localStorage.setItem("token", token);
            const decoded = jwt_decode(token);
            console.log(decoded);
            // localStorage.setItem("user", JSON.stringify(decoded.user));
        })
        .catch(error => {
            toast.error(error.response.data.message);
        })
        console.log(formUserName)
        console.log(formPassword)
    }

    return (
        <>
            <Box boxSizing="inherit">
                <Flex position={"fixed"} top="0"left="0"bottom="0"right="0" backgroundColor={'antiquewhite'} >
                    <Box zIndex={"-1"} position={"absolute"} w="100%" h={"100%"} backgroundColor="rgba(0,0,0,0.1)" >

                    </Box>
                    <Box m={"auto"}backgroundColor="#fff"borderRadius={6}>
                        <form onSubmit={handSubmitForm}>
                            <Box width={400}margin="32px auto">
                                <Box>
                                    <Link to={"/"}>
                                        <Box textAlign={"center"}>
                                            <Icon fontSize="50px" color={"#fe6433"} as={AiOutlineShoppingCart}/>
                                            <Box color={"#fe6433"} fontSize="24px" fontWeight="700" mt={"-4px"}>
                                                Dalziel
                                            </Box>
                                        </Box>
                                    </Link>
                                </Box>
                                <Box m={"0 8px 20px"}>
                                    <Flex justify={"space-between"} mt="18px" mb="32px">
                                        <Box fontWeight={600} fontSize="18px">
                                            Đăng nhập
                                        </Box>
                                        <Box _hover={{"opacity":'0.6'}}>
                                            <Link to={"/auth/signup"}>
                                                <Box fontWeight={700} fontSize="15px" color={"#ea4d2d"}>
                                                    Đăng ký
                                                </Box>
                                            </Link>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Box m={"12px 0"}>
                                        <Input onChange={handleChangeFormUserName} placeholder="Email/Số điện thoại" border={"2px solid #ccc"}/>
                                    </Box>
                                    <Box m={"12px 0"}>
                                        <Input onChange={handleChangeFormPassword} placeholder="Mật khẩu" type={"password"} border={"2px solid #ccc"}/>
                                    </Box>
                                </Box>
                                <Box position={"relative"} fontSize="16px" textAlign={"end"} color={"black"}>
                                    <Link to={"/"} style={{'margin':"0 8px","color":"#ea4d2d","fontWeight":"700"}} className="linkSupport">
                                        Quên mật khẩu
                                    </Link>
                                    <Box className="boderIcon" display="initial"></Box>
                                    <Link className="linkSupport" to={"/"} style={{'margin':"0 8px","color":"#939393","fontWeight":"700"}}>
                                        Cần trợ giúp
                                    </Link>
                                </Box>
                                <Flex justify={"end"} m="36px 0 32px">
                                    <Button onClick={handleClickGoBack} w={140} colorScheme='gray' size='md' variant={"outline"}>
                                        Trở lại
                                    </Button>
                                    <Box m={2}></Box>
                                    <Button type="submit" w={140} backgroundColor="#ea4d2d" color={"#fff"} _hover={{"opacity":"0.7"}} size='md' >
                                        Đăng nhập
                                    </Button>
                                </Flex>
                            </Box>
                            <Box p={"8px 45px"} w="500px" backgroundColor={"#f5f5f5"} borderRadius={6}>
                                <Flex justify={"space-between"} boxSizing="revert" p={"4px 12px"}>
                                    <Box fontWeight={490} bg={"#3a5a98"} color="#fff" fontSize={12} p={"4px 16px"} borderRadius={4}>
                                        <Icon as={AiFillFacebook} fontSize="20px"margin="2px 4px 4px"/>
                                        Kết nối với Facebook
                                    </Box>
                                    <Box fontWeight={490} bg={"yellow"} color="black" fontSize={12} p={"4px 16px"} borderRadius={4}>
                                        <Icon as={FcGoogle} fontSize="20px"margin="2px 4px 4px"/>
                                        Kết nối với Google
                                    </Box>
                                </Flex>
                            </Box>
                        </form>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}