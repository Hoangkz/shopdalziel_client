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
  Box,
  Flex,
  Image
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ManualClose(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const location = useLocation();

  const handleClickModal = (e) => {
    if(props.user){
      console.log(props.user)
    }
    else{
      toast.error("Bạn cần phải đăng nhập trước")
      navigate(`/auth/login?next-page=${location.pathname}`);
    }
  }

  return (
    <>
        <Button colorScheme='linkedin' size='lg'onClick={onOpen}>Mua ngay</Button>

        <Modal isOpen={isOpen} size="lg" onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader color={"#fe6433"}> {props?.item?.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={"12px"}>
              <Flex>
                <Box margin={"15px auto"}>
                  <Image w={"200px"} src={props?.item?.img}/>
                </Box>
                <Box margin={"auto"} fontSize="16px">
                  <Box m={"16px 0"}>
                    Số lượng: <span style={{"color":"#28a745","fontWeight":"700"}}>{props?.count}</span>
                  </Box>
                  <Box m={"16px 0"}>
                    Đơn giá: <span style={{"color":"#28a745","fontWeight":"700"}}>{props?.item?.gia}</span>
                  </Box>
                  <Box m={"16px 0"}>
                    Phí ship: <span style={{"color":"#28a745","fontWeight":"700"}}>{props?.item?.ship?props?.item?.ship:"Miễn phí"}</span>
                  </Box>
                  <Box m={"18px 0"}>
                    Tổng giá: <span style={{"color":"#fe6433","fontWeight":"700","fontSize":"30px"}}>{props?.item?.gia*props?.count}</span>
                  </Box>
                </Box>
              </Flex>
            
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="blue" onClick={handleClickModal} mr={3} > 
                  Đặt hàng
                </Button>
                <Button onClick={onClose}>Huỷ</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  );
}
