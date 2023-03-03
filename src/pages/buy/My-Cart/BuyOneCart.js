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
    Box
} from '@chakra-ui/react'
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import buyApi from '../../../API/buyApi';



export default function BuyOneCart({ item }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const handleClickBuyCart = (e) => {
        const formData = new FormData();
        formData.append("listId",item._id);   
        buyApi.buys_carts(formData)
        .then((response) => {
            onClose()
            toast.success(response.data.message)
            navigate("/carts-order")
        })
        .catch((error) => {toast.success(error.response.data.message)}) 
    }
    return (
        <>
            <Button colorScheme='green' ml={3} onClick={onOpen} _hover={{ opacity: "0.8" }}>
                <Icon fontSize={"24px"} as={BsFillCartCheckFill} />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Đặt hàng</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>
                            <Text display={"initial"} color="#fe6433">{item.item_id.name}</Text> số lượng: {item.soluong}, tổng giá: {item.tong_gia}
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={handleClickBuyCart} colorScheme='green' mr={3} >Đặt hàng</Button>
                        <Button variant='ghost' onClick={onClose}>Huỷ</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}