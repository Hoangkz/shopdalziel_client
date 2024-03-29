import React from "react";
import { Box, Checkbox, Flex, Heading, Text, useDisclosure, Image, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { format } from 'date-fns';

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import { toast } from "react-toastify";
// status 
//        1: Trong giỏ hàng
//        2: Chờ giao hàng
//        3: Đơn hàng đã huỷ
//        4: Giao hàng thành công
import buyApi from "../../../API/buyApi";
import CancelCarts from "./CancelCarts";
import CancelOneCart from "./CancelOneCart";
import DeleteCarts from "./DeleteCarts";
import DeleteOneCart from "./DeleteOneCart";
export default function ListUser() {
    const { onClose } = useDisclosure();

    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [checkboxList, setCheckboxList] = useState([]);
    const [checkDelete, setCheckDelete] = useState(false);
    const [deleteCart, setDeleteCart] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const [dataItems, setDataItems] = useState([])


    function handlePageClick(selectedPage) {
        setCurrentPage(selectedPage.selected + 1);
    }
    
    useEffect(() => {
        (async () => {
            setCheckDelete(false)
            try {
                const res = await buyApi.list_cart_order(currentPage);
                const listCheckBox = res.data.cartItem.map(item => {
                    return {
                        ...item,
                        isChecked: false
                    }
                })
                setIsCheckedAll(false)
                setCheckboxList(listCheckBox)
                setDataItems(res.data);

            } catch (error) {
                toast.error(error.response.data.message)
                if (error.response.status === 403) {
                    navigate('/forbidden');
                    console.log(error)
                }
                setDataItems("")
            }
        })();
    }, [deleteCart, currentPage]);

    
    const handleCheckboxChange = (event, index) => {
        const { checked } = event.target;
        const newCheckboxList = [...checkboxList];
        newCheckboxList[index].isChecked = checked;
        setCheckboxList(newCheckboxList);
        setIsCheckedAll(newCheckboxList.every((checkbox) => checkbox.isChecked));
        for (let i = 0; i < newCheckboxList.length; i++) {
            if (newCheckboxList[i].isChecked === true) {
                setCheckDelete(true)
                i = newCheckboxList.length
            }
            else {
                setCheckDelete(false)
            }
        }
    };

    const handleCheckboxAllChange = (event) => {
        const { checked } = event.target;
        const newCheckboxList = checkboxList.map((checkbox) => {
            checkbox.isChecked = checked;
            return checkbox;
        });
        setCheckboxList(newCheckboxList);
        setIsCheckedAll(checked);
        for (let i = 0; i < newCheckboxList.length; i++) {
            if (newCheckboxList[i].isChecked === true) {
                setCheckDelete(true)
                i = newCheckboxList.length
            }
            else {
                setCheckDelete(false)
            }
        }
    };

    
    const handleClickDelete = (e) => {
        const listDelete = checkboxList.filter(checkbox => checkbox.isChecked)
        const list_id = listDelete.map(checkbox => checkbox._id)
        const formData = new FormData();
        formData.append("listId", list_id)
        buyApi.delete_cart(formData)
            .then((response) => {
                onClose()
                toast.success(response.data.message)
                setDeleteCart(!deleteCart)
            })
            .catch((error) => {
                toast.error(error.response.data.message)
                if (error.response.status === 403) {
                    navigate('/forbidden');
                }
            });
    }
    const handleClickCancelCarts = (e)=>{
        const listCancel = checkboxList?.filter((check)=>check.isChecked&&check.status ==="2")
        const formData = new FormData();
        const listId = listCancel.map((data)=>data._id);
        formData.append("listId", listId);
        buyApi.cancel_cart_order(formData)
        .then((response)=>{
            onClose()
            toast.success(response.data.message)
            setDeleteCart(!deleteCart)
        })
        .catch((error) => {
            toast.error(error.response.data.message)
            if (error.response.status === 403) {
                navigate('/forbidden');
            }
        });
    }
    
    const handleClickCancelOne =(item,onClose)=>{
        
        const formData = new FormData();
        const listId = item._id;
        formData.append("listId", listId);
        buyApi.cancel_cart_order(formData)
        .then((response)=>{
            onClose()
            toast.success(response.data.message)
            setDeleteCart(!deleteCart)
        })
        .catch((error)=>{toast.error(error.response.data.message)});
    }
    const handleClickDeleteOne = (item,onClose) => {
        const formData = new FormData();
        formData.append("listId",item._id);   
        buyApi.delete_cart(formData)
        .then((response) => {
            onClose()
            toast.success(response.data.message)
            setDeleteCart(!deleteCart)
        })
        .catch((error) => {toast.success(error.response.data.message)}) 
    }

    return (
        <>
            <Box maxW="90%" mx={"auto"}>
                <Box backgroundColor="#fff" position={"relative"}>
                    <Box color="rgb(149, 147, 147);">
                        <Heading fontSize="1.25rem" lineHeight={1.2} fontWeight="500" p="16px">Đơn hàng của tôi</Heading>
                    </Box>
                    <Flex style={{ position: "absolute", top: "16px", right: "20%" }}>
                        <Box>
                            {checkDelete &&
                                <>
                                    <DeleteCarts checkboxList={checkboxList} handleClickDelete={handleClickDelete}/>
                                    <CancelCarts checkboxList={checkboxList} handleClickCancelCarts={handleClickCancelCarts}/>
                                </>
                            }
                        </Box>
                    </Flex>
                    <Flex style={{ position: "absolute", top: "16px", right: "36px" }}>
                        <Box>
                            <Link to={"/carts"}><Box color={"#fe6433"} _hover={{"opacity":"0.8",textDecoration:"underline"}}>Giỏ hàng của tôi</Box></Link>
                        </Box>
                    </Flex>
                    {checkboxList&&checkboxList.length ?
                        <>
                            <TableContainer mt={"16px"}>
                                <Table variant='simple' size={"md"}>
                                    <Thead>
                                        <Tr>
                                            <Th p={"4px 16px"}>
                                                <Checkbox
                                                    isChecked={isCheckedAll}
                                                    onChange={handleCheckboxAllChange}>
                                                </Checkbox>
                                            </Th>
                                            <Th p={"8px 12px"} >STT</Th>
                                            <Th p={"8px 12px"}>Tên sản phẩm</Th>
                                            <Th>Ảnh</Th>
                                            <Th p={0} maxW={"100px"}>Số lượng</Th>
                                            <Th>Đơn giá</Th>
                                            <Th>Tổng giá</Th>
                                            <Th>Ngày mua</Th>
                                            <Th>Trạng thái</Th>
                                            <Th p={0} ></Th>
                                        </Tr>
                                    </Thead>
                                    {checkboxList.map((item, index) => {
                                        const date = item?.updatedAt || null
                                        return (
                                            <Tbody key={index}>
                                                <Tr>
                                                    <Td p={"4px 16px"}>
                                                        <Checkbox
                                                            isChecked={item.isChecked}
                                                            onChange={(event) => handleCheckboxChange(event, index)}
                                                        ></Checkbox>
                                                    </Td>
                                                    <Td p={"8px 16px"}>{index + 1}</Td>
                                                    <Td p={"8px 12px"} fontWeight={"500"} _hover={{ textDecoration: "underline" }} color="blue" ><Link to={`/items/${item.item_id.name}`} >{item.item_id.name}</Link></Td>
                                                    <Td> <Image w={"60px"} src={item.item_id.img}/>  </Td>
                                                    <Td p={0}>{item.soluong}</Td>
                                                    <Td>{item.gia}</Td>
                                                    <Td>{item.tong_gia}</Td>
                                                    <Td>{date && format(new Date(date), 'dd/MM/yyyy')}</Td>
                                                    <Td>
                                                        {
                                                            item?.status==='1'?"Trong giỏ hàng":
                                                            item.status==='2'?<Text color={"#17a2b8"}>Chờ giao hàng</Text>:
                                                            item.status==='3'?<Text color={"red"}>Đơn hàng đã huỷ</Text>:
                                                            item.status==='4'?<Text color={"green"}>Giao hàng thành công</Text>:
                                                            item.status==='5'?<Text color={"pink"}>Người bán đã huỷ</Text>:""
                                                        }
                                                    </Td>
                                                    <Td p={"0"}>
                                                        {
                                                            item?.status==="2"?<CancelOneCart handleClickCancelOne={handleClickCancelOne} item ={item}/>:
                                                            item?.status==="4"?<Link to={`/items/${item.item_id.name}`}><Button colorScheme={"green"}>Mua lại</Button></Link>:
                                                            <DeleteOneCart handleClickDeleteOne={handleClickDeleteOne} item ={item}/>
                                                        }
                                                    </Td>
                                                </Tr>
                                            </Tbody>
                                        )
                                    })}
                                </Table>
                            </TableContainer>
                            <Flex p="4" justify={"center"}>
                                <ReactPaginate
                                    previousLabel={'<<'}
                                    nextLabel={'>>'}
                                    breakLabel={"..."}
                                    pageCount={dataItems?.pageLength}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={3}
                                    onPageChange={handlePageClick}
                                    containerClassName={"pagination"}
                                    pageClassName={"page-item"}
                                    pageLinkClassName={"page-link"}
                                    activeClassName={"active"}
                                />
                            </Flex>
                        </> :
                        (<Box h={100}>
                            <Text textAlign={"center"} fontSize="22px">
                                Bạn chưa có đơn hàng nào!
                            </Text>
                        </Box>)
                    }
                </Box>
            </Box>
        </>

    );
}
