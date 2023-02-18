import { Box, Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { AiFillFacebook, AiOutlineShoppingCart } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "../auth.css"
import { useState, startTransition, useEffect } from "react";

export default function SignUp() {
    const handleClickGoBack=()=> {
        startTransition(() => {
            window.history.back();
        });
    }
    const [formUserName, setFormUserName] = useState("");
    const [formPassword, setFormPassword] = useState("");
    const [formPasswordComfirm, setFormPasswordComfirm] = useState("");

    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordComfirmError, setPasswordComfirmError] = useState(false);

    const [checkPasswordForm, setCheckPasswordForm] = useState(false);

    const handleChangeFormUserName = (e) => {
        const value = e.target.value;
        setFormUserName(value);
        if (value.length < 5) {
            setUserNameError(true);
        } else {
            setUserNameError(false);
        }
    }

    const handleChangeFormPassword = (e) => {
        const value = e.target.value;
        setFormPassword(value);
        if (value.length < 5) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }

    const handleChangeFormPasswordComfirm = (e) => {
        const value = e.target.value;
        setFormPasswordComfirm(value);
        if (value.length < 5) {
            setPasswordComfirmError(true);
        } else {
            setPasswordComfirmError(false);
        }
    }

    useEffect(()=>{
        if(formPassword!==formPasswordComfirm){
            setCheckPasswordForm(true)
        }
        else{
            setCheckPasswordForm(false)
        }
    },[formPassword,formPasswordComfirm])

    const handleSubmitForm = (e) => {
        e.preventDefault(); // Ngăn chặn sự kiện submit mặc định của form
        // Xử lý logic đăng ký ở đây
        console.log(formUserName)
        console.log(formPassword)
        console.log(formUserName.length)
        if(formUserName.length>=5&&formPassword.length>=5&&formPasswordComfirm===formPassword) {
            console.log("ok")
        }
    };

    
    
    return (
        <>
            <Box boxSizing="inherit">
                <Flex position={"fixed"} top="0"left="0"bottom="0"right="0" backgroundColor={'antiquewhite'} >
                    <Box zIndex={"-1"} position={"absolute"} w="100%" h={"100%"} backgroundColor="rgba(0,0,0,0.1)" >

                    </Box>
                    <Box m={"auto"}backgroundColor="#fff"borderRadius={6}>
                        <form onSubmit={handleSubmitForm}>
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
                                            Đăng ký
                                        </Box>
                                        <Box _hover={{"opacity":'0.6'}}>
                                            <Link to={"/auth/login"}>
                                                <Box fontWeight={700} fontSize="15px" color={"#ea4d2d"}>
                                                    Đăng nhập
                                                </Box>
                                            </Link>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Box m={"24px 0"} position="relative">
                                        <Input onChange={handleChangeFormUserName} placeholder="Email/Số điện thoại" border={"2px solid #ccc"}/>
                                        {userNameError && <span style={{ color: 'red',fontSize:"13px",position:"absolute",bottom:"-20px",left:"1px" }}>Tài khoản phải có ít nhất 5 ký tự!</span>}
                                    </Box>
                                    <Box m={"24px 0"} position="relative">
                                        <Input onChange={handleChangeFormPassword} placeholder="Mật khẩu" type={"password"} border={"2px solid #ccc"}/>
                                        {passwordError && <span style={{ color: 'red',fontSize:"13px",position:"absolute",bottom:"-20px",left:"1px" }}>Mật khẩu phải có ít nhất 5 ký tự!</span>}
                                    </Box>
                                    <Box m={"24px 0"} position="relative">
                                        <Input onChange={handleChangeFormPasswordComfirm} placeholder="Nhập lại mật khẩu" type={"password"} border={"2px solid #ccc"}/>
                                        {passwordComfirmError && <span style={{ color: 'red',fontSize:"13px",position:"absolute",bottom:"-20px",left:"1px" }}>Mật khẩu phải có ít nhất 5 ký tự!</span>}
                                        {(checkPasswordForm&&!passwordComfirmError)&&<span style={{ color: 'red',fontSize:"13px",position:"absolute",bottom:"-20px",left:"1px" }}>Mật khẩu và mật khẩu nhập lại không giống nhau!</span>}
                                    </Box>
                                </Box>
                                <Box fontSize="12px" textAlign={"center"} color={"black"}>
                                    <span>
                                        Bằng việc đăng ký, bạn đã đồng ý với Dalziel về 
                                    </span>
                                    <Link to={"/"} style={{'margin':"0 2px","color":"#ea4d2d","fontWeight":"700"}} className="linkSupport">
                                        Điều khoản dịch vụ
                                    </Link>
                                    <span>&</span>
                                    <Text>
                                        <Link className="linkSupport" to={"/"} style={{'margin':"0 2px","color":"#ea4d2d","fontWeight":"700"}}>
                                            Chính cách bảo mật
                                        </Link>
                                    </Text>
                                </Box>
                                <Flex justify={"end"} m="36px 0 32px">
                                    <Button onClick={handleClickGoBack} w={140} colorScheme='gray' size='md' variant={"outline"}>
                                        Trở lại
                                    </Button>
                                    <Box m={2}></Box>
                                    <Button type="submit" w={140} backgroundColor="#ea4d2d" color={"#fff"} _hover={{"opacity":"0.7"}} size='md' >
                                        Đăng ký
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