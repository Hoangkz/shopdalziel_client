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
import { RiDeleteBin6Line } from 'react-icons/ri'



export default function DeleteCart({handleClickDelete, checkboxList}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const listDelete = checkboxList?.filter((check)=>check.isChecked)
    return (
        <>
            <Button onClick={onOpen} _hover={{ opacity: "0.8" }}>
                <Icon fontSize={"24px"} as={RiDeleteBin6Line} />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Xoá khỏi giỏ hàng</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {listDelete.map((data,index) => {
                            return<Box key={index}> <Text display={"initial"} color="#fe6433">{data.item_id.name}</Text>, số lượng: {data.soluong}, tổng giá: {data.tong_gia}</Box>
                        })}
                        <Text mt={"10px"}>
                            Bạn có muốn xoá các vật phẩm này?
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={handleClickDelete} colorScheme='red' mr={3} >Xoá</Button>
                        <Button variant='ghost' onClick={onClose}>Huỷ</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}