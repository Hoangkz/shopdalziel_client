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
import { FcShipped } from 'react-icons/fc'

export default function ShipCarts({checkboxList, handleClickShipCarts}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const listCart = checkboxList?.filter((check)=>check.isChecked&&check.status ==="2")
    
    return (
        <>
            <Button ml={4} onClick={onOpen} _hover={{ opacity: "0.8" }}>
                <Icon fontSize={"24px"} as={FcShipped} />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Giao hàng</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {listCart.map((data,index) => {
                            return<Box key={index}> <Text display={"initial"} color="#fe6433">{data.item_id.name}</Text>, số lượng: {data.soluong}, tổng giá: {data.tong_gia}</Box>
                        })}
                        <Text mt={"10px"}>
                            Bạn có muốn giao các đơn hàng này?
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={handleClickShipCarts} colorScheme='green' mr={3} >Giao hàng</Button>
                        <Button variant='ghost' onClick={onClose}>Đóng</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}