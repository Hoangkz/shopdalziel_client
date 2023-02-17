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
} from "@chakra-ui/react";

export default function ManualClose() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>  
        <Button colorScheme='linkedin' size='lg'onClick={onOpen}>Mua ngay</Button>
        
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>Mua hàng</ModalBody>

            <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                Mua ngay
                </Button>
                <Button onClick={onClose}>Huỷ</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  );
}
