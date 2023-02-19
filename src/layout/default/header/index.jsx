import {
  Box,
  Flex,
  List,
  ListItem,
  Icon,
  Input,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
} from "@chakra-ui/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchHeaderAction } from "../../../redux/actions";

export default function Header() {
  const [search, setSearch] = useState();
  const [isLogined, setIsLogined] = useState(true);
  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickLogOut = (e) => {
    setIsLogined(false)
  };

  const handleClickButton = (e) => {
    dispatch(searchHeaderAction({search:search}));
    navigate("/search")

  }
  const role = 3;
  return (
    <>
      <Box
        position={"fixed"}
        w="100%"
        zIndex={1}
        background={"linear-gradient(0, #fe6433, #f53e2d);"}
      >
        <Box w="75%" margin="auto" fontSize={14}>
          <Flex justify={"space-between"}>
            <List style={{ display: "flex" }} margin="0" padding={0}>
              <ListItem margin="8px" className="navItem">
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  Home
                </Link>
              </ListItem>
              <ListItem className="navItem" margin="8px">
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  Tải ứng dụng
                </Link>
              </ListItem>
              <ListItem margin="8px" color="#fff" cursor={"inherit"}>
                Kết nối
              </ListItem>
              <ListItem className="navItem" color="#fff" fontSize="20px">
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  <Icon as={FaFacebook} />
                </Link>
              </ListItem>
              <ListItem className="navItem" color="#fff" fontSize="20px">
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  <Icon as={FaGoogle} />
                </Link>
              </ListItem>
            </List>
            <List style={{ display: "flex" }} margin="0" padding={0}>
              <ListItem className="navItem" margin="8px">
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  Thông báo
                </Link>
              </ListItem>
              <ListItem className="navItem" margin="8px">
                <Link
                  to="tel:0968823201"
                  target={"_blank"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Hỗ trợ
                </Link>
              </ListItem>
              {!isLogined ? (
                <ListItem className="navItem" margin="8px">
                  <Link
                    to="/auth/signup"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Đăng ký
                  </Link>
                </ListItem>
              ) : (
                <ListItem className="navItem" margin="8px"></ListItem>
              )}
              {!isLogined ? (
                <ListItem className="navItem" margin="8px">
                  <Link
                    to="/auth/login"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Đăng nhập
                  </Link>
                </ListItem>
              ) : (
                <ListItem margin="8px" position={"relative"}>
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        variant={"link"}
                        _hover={{ textDecoration: "none", opacity: "0.6" }}
                        color="#fff"
                      >
                        UserName
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent w={"220px"} >
                      <PopoverArrow />
                      <List>
                        <ListItem className="navItem_hover">
                          <Link
                            to="/"
                            style={{
                              display: "block",
                              color: "black",
                              fontSize: "1rem",
                            }}
                          >
                            <PopoverHeader>Tài khoản</PopoverHeader>
                          </Link>
                        </ListItem>
                        {role === 1 ? (
                          <>
                            <ListItem className="navItem_hover">
                              <Link
                                to="/"
                                style={{
                                  display: "block",
                                  color: "black",
                                  fontSize: "1rem",
                                }}
                              >
                                <PopoverHeader p={"12px 16px"}>Giỏ hàng của tôi</PopoverHeader>
                              </Link>
                            </ListItem>
                            <ListItem className="navItem_hover">
                              <Link
                                to="/"
                                style={{
                                  display: "block",
                                  color: "black",
                                  fontSize: "1rem",
                                }}
                              >
                                <PopoverHeader p={"12px 16px"}>Đơn hàng của tôi</PopoverHeader>
                              </Link>
                            </ListItem>
                          </>
                        ) : role === 2 ? (
                          <ListItem className="navItem_hover">
                            <Link
                              to="/"
                              style={{
                                display: "block",
                                color: "black",
                                fontSize: "1rem",
                              }}
                            >
                              <PopoverHeader p={"12px 16px"}>Quản lý đơn hàng</PopoverHeader>
                            </Link>
                          </ListItem>
                        ) : role === 3 ? (
                          <>
                            <ListItem className="navItem_hover">
                              <Link
                                to="/"
                                style={{
                                  display: "block",
                                  color: "black",
                                  fontSize: "1rem",
                                }}
                              >
                                <PopoverHeader p={"12px 16px"}>Quản lý đơn hàng</PopoverHeader>
                              </Link>
                            </ListItem>
                            <ListItem className="navItem_hover">
                              <Link
                                to="/"
                                style={{
                                  display: "block",
                                  color: "black",
                                  fontSize: "1rem",
                                }}
                              >
                                <PopoverHeader p={"12px 16px"}>Danh sách Account</PopoverHeader>
                              </Link>
                            </ListItem>
                            <ListItem className="navItem_hover">
                              <Link
                                to="/"
                                style={{
                                  display: "block",
                                  color: "black",
                                  fontSize: "1rem",
                                }}
                              >
                                <PopoverHeader p={"12px 16px"}>Danh sách sản phẩm</PopoverHeader>
                              </Link>
                            </ListItem>
                          </>
                        ) : null}
                        <ListItem className="navItem_hover" cursor={"pointer"} >
                            <Button onClick={handleClickLogOut}>
                              <PopoverHeader  p={"12px 16px"}>Đăng xuất</PopoverHeader>
                            </Button>
                        </ListItem>
                      </List>
                    </PopoverContent>
                  </Popover>
                </ListItem>
              )}
            </List>
          </Flex>
        </Box>
        <Box w="80%" margin="auto" mt={4} pb={0}>
          <Flex justify={"space-between"}>
            <Box fontSize="2.5rem" color="#fff">
              <Link to={"/"} style={{ color: "#fff" }} className="navItem">
                <Icon as={BsFillBagCheckFill} mt="-15px" bg="" color="#fff" />
                Dalziel
              </Link>
            </Box>
            <Box w="75%">
              <Flex>
                <Input
                  onChange={handleChangeInput}
                  w="75%"
                  placeholder="Search"
                  outline="none"
                  backgroundColor={"#fff"}
                />
                <Button onClick={handleClickButton}
                  mx={4}
                  backgroundColor="transparent"
                  color="#fff"
                  variant="outline"
                  _hover={{ backgroundColor: "#f53e2d" }}
                >
                  Search
                </Button>
              </Flex>
            </Box>
            <Box fontSize="2.5rem" color="#fff" className="navItem">
              <Icon as={AiOutlineShoppingCart} />
            </Box>
          </Flex>
        </Box>
        <Box h={4}></Box>
      </Box>
    </>
  );
}
