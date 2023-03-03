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
import { MdCancelPresentation } from 'react-icons/md'

export default function CancelCarts({checkboxList, handleClickCancelCarts}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const listCancel = checkboxList?.filter((check)=>check.isChecked&&check.status ==="2")
    
    return (
        <>
            <Button colorScheme={"red"} onClick={onOpen} _hover={{ opacity: "0.8" }}>
                <Icon fontSize={"24px"} as={MdCancelPresentation} />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Huỷ mua hàng</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {listCancel.map((data,index) => {
                            return<Box key={index}> <Text display={"initial"} color="#fe6433">{data.item_id.name}</Text>, số lượng: {data.soluong}, tổng giá: {data.tong_gia}</Box>
                        })}
                        <Text mt={"10px"}>
                            Bạn có muốn huỷ mua các vật phẩm này?
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={handleClickCancelCarts} colorScheme='red' mr={3} >Huỷ</Button>
                        <Button variant='ghost' onClick={onClose}>Đóng</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}