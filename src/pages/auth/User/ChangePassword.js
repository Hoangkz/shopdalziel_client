import { Box, Button, Flex, Input, useDisclosure } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import usersApi from "../../../API/usersApi";
export default function ChangePassword({id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordComfirm, setNewPasswordComfirm] = useState("");

    const [passwordError, setPasswordError] = useState(false);
    const [passwordComfirmError, setPasswordComfirmError] = useState(false);

    const [checkPasswordForm, setCheckPasswordForm] = useState(false);

    const handleChangePassWord = (e) => {
        const value = e.target.value;
        setPassword(value);
    }
    const handleSubmitFormPassword = (e)=>{
        
        e.preventDefault(); // Ngăn chặn sự kiện submit mặc định của form
        // Xử lý logic đăng ký ở đây
        if (newPassword.length >= 5 && newPasswordComfirm === newPassword) {
            const formData = new FormData();
            formData.append('password', password);
            formData.append('newPassword', newPassword);
            formData.append('id', id);
            usersApi.changePassword(formData)
            .then(response => {
                toast.success(response.data.message);
                onClose();
            })
            .catch(error => {
                toast.error(error.response.data.message);
            })
        }
    }
    const handleChangeNewPassword = (e) => {
        const value = e.target.value;
        setNewPassword(value);
        if (value.length < 5) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }

    const handleChangeNewPasswordComfirm = (e) => {
        const value = e.target.value;
        setNewPasswordComfirm(value);
        if (value.length < 5) {
            setPasswordComfirmError(true);
        } else {
            setPasswordComfirmError(false);
        }
    }

    useEffect(() => {
        if (newPassword !== newPasswordComfirm) {
            setCheckPasswordForm(true)
        }
        else {
            setCheckPasswordForm(false)
        }
    }, [newPassword, newPasswordComfirm])

    return (
        <>
            <Button onClick={onOpen} colorScheme='blue'>Đổi mật khẩu</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Đổi mật khẩu</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmitFormPassword} >
                            <Box m={"24px 0"} position="relative">
                                <Input type={"password"} onChange={handleChangePassWord} placeholder="Mật khẩu" border={"2px solid #ccc"} />
                            </Box>
                            <Box m={"24px 0"} position="relative">
                                <Input onChange={handleChangeNewPassword} placeholder="Mật khẩu mới" type={"password"} border={"2px solid #ccc"} />
                                {passwordError && <span style={{ color: 'red', fontSize: "13px", position: "absolute", bottom: "-20px", left: "1px" }}>Mật khẩu mới phải có ít nhất 5 ký tự!</span>}
                            </Box>
                            <Box m={"24px 0"} position="relative">
                                <Input onChange={handleChangeNewPasswordComfirm} placeholder="Nhập lại mật khẩu mới" type={"password"} border={"2px solid #ccc"} />
                                {passwordComfirmError && <span style={{ color: 'red', fontSize: "13px", position: "absolute", bottom: "-20px", left: "1px" }}>Mật khẩu mới phải có ít nhất 5 ký tự!</span>}
                                {(checkPasswordForm && !passwordComfirmError) && <span style={{ color: 'red', fontSize: "13px", position: "absolute", bottom: "-20px", left: "1px" }}>Cần nhập lại mật khẩu mới!</span>}
                            </Box>
                            {/* <ModalFooter> */}
                            <Flex justify={"end"} mb="16px">
                                <Button type="submit" colorScheme='blue' mr={3}>Đổi mật khẩu</Button>
                                <Button onClick={onClose}>
                                    Đóng
                                </Button>
                            </Flex>
                            {/* </ModalFooter> */}
                        </form>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}