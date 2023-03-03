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



export default function BuyCart({ checkboxList }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const listCart = checkboxList?.filter((check) => check.isChecked)
    const handleClickBuyCart = (e) => {
        const formData = new FormData();
        const listId = listCart.map((cart) =>cart._id);
        formData.append("listId", listId);
        buyApi.buys_carts(formData)
            .then((response) => {
                onClose()
                toast.success(response.data.message)
                navigate("/carts-order")
            })
            .catch((error) => { toast.success(error.response.data.message) })
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
                        {listCart?.map((data, index) => {
                            return <Box key={index}> <Text display={"initial"} color="#fe6433">{data.item_id.name}</Text>, số lượng: {data.soluong}, tổng giá: {data.tong_gia}</Box>
                        })}
                        <Text mt={"10px"}>
                            Bạn có muốn mua các vật phẩm này?
                        </Text>
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