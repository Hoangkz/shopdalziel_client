import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Icon
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function ManualClose() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
        <Button colorScheme="teal" size="lg" onClick={onOpen}>
            <Icon as={AiOutlineShoppingCart} mr="2px" />
            Thêm vào giỏ hàng
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>thêm giỏ hàng</ModalBody>

            <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                Thêm vào giỏ hàng
                </Button>
                <Button onClick={onClose}>Huỷ</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  );
}
