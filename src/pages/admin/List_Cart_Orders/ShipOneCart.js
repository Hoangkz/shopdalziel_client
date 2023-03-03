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
    Box,
} from '@chakra-ui/react'
import { FcShipped } from 'react-icons/fc';

export default function ShipOneCart({item, handleClickShipOne}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
   
    return (
        <>
            <Button onClick={onOpen} _hover={{ opacity: "0.8" }}>
                <Icon fontSize={"24px"} as={FcShipped} />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Giao hàng</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box> <Text display={"initial"} color="#fe6433">{item?.item_id?.name}</Text> số lượng: {item?.soluong}, tổng giá: {item?.tong_gia}</Box>
                        <Text mt={"10px"}>
                            Bạn có muốn giao đơn hàng này?
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={()=>handleClickShipOne(item,onClose)} colorScheme="green" mr={3} >Giao hàng</Button>
                        <Button variant='ghost' onClick={onClose}>Đóng</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}