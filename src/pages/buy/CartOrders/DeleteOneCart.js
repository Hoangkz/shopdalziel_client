import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Icon,
    Text,
} from '@chakra-ui/react'
import { RiDeleteBin6Line } from 'react-icons/ri';



export default function DeleteOneCart({ item, handleClickDeleteOne }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} _hover={{ opacity: "0.8" }}>
                <Icon fontSize={"24px"} as={RiDeleteBin6Line} />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Xoá khỏi đơn hàng</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mt={"10px"}>
                            Bạn có muốn xoá đơn hàng này?
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={()=>handleClickDeleteOne(item,onClose)} colorScheme='red' mr={3} >Xoá</Button>
                        <Button variant='ghost' onClick={onClose}>Huỷ</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}