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
import { toast } from 'react-toastify';
import buyApi from '../../../API/buyApi';



export default function CancelOneCart({item, handleClickCancelOne}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
   
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
                        <Box> <Text display={"initial"} color="#fe6433">{item?.item_id?.name}</Text>, số lượng: {item?.soluong}, tổng giá: {item?.tong_gia}</Box>
                        <Text mt={"10px"}>
                            Bạn có muốn huỷ mua vật phẩm này?
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={()=>handleClickCancelOne(item)} colorScheme='red' mr={3} >Huỷ</Button>
                        <Button variant='ghost' onClick={onClose}>Đóng</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}