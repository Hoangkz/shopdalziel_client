import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import dataDanhMuc  from "../../layout/danh_muc_sp";
import { Link } from "react-router-dom";
import "./home.css"
import shopApi from "../../API/shopApi";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
export default function Home(){

    const [dataItem, setDataItem] = useState()
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageClick = (selectedPage)=>{
        console.log(selectedPage.selected+1)
        setCurrentPage(selectedPage.selected+1);
    }
  
    useEffect(() => {
        (async () => {
          try {
            const res = await shopApi.home(currentPage);
            setDataItem(res.data);
          } catch (error) {
            setDataItem(null);
          }
        })();
    },[currentPage]);
    console.log(dataItem)
    return(
        <>
            <Header/>
            <Box backgroundColor="antiquewhite" pt={150} >
                <Box backgroundColor="#fff" maxW="80%" mx={"auto"}>
                    <Box color="rgb(149, 147, 147);">
                        <Heading fontSize="1.25rem" lineHeight={1.2} fontWeight="500" p="16px" m={0}>DANH MỤC</Heading>
                    </Box>
                    <Flex flexWrap={"wrap"}justify="space-around">
                        {dataDanhMuc.map((item,index)=>{
                            return(
                                <Box key={index} className="danhmuchover" border="1px solid rgba(0,0,0,.125)" w="124px" borderRadius="0.25rem">
                                    <Link to={`/list-items/${item?.desc}`}>
                                        <Image src={item?.img} w="124px"></Image>
                                        <Box className="col" w="124px" h={48} textAlign={"center"} color="black">
                                            {item?.desc}
                                        </Box>
                                    </Link>
                                </Box>
                            )
                        })}
                    </Flex>
                </Box>
            </Box>

            <Box backgroundColor="antiquewhite" pt={50} >
                <Box backgroundColor="#fff" maxW="80%" mx={"auto"}>
                    <Box color="rgb(149, 147, 147);">
                        <Heading fontSize="1.25rem" lineHeight={1.2} fontWeight="500" p="16px" m={0}>DANH SÁCH SẢN PHẨM</Heading>
                    </Box>
                    <Flex flexWrap={"wrap"} m="0 21px">
                        {dataItem?.items.map((item,index)=>{
                            return(
                                <Box m="0 2px" key={index} className="danhmuchover" border="1px solid rgba(0,0,0,.125)" w="135px" borderRadius="0.25rem">
                                    <Link to={`/items/${item?.name}`}>
                                        <Image src={item?.img} w="135px"></Image>
                                        <Box className="col" w="135px" h={48} textAlign={"center"} color="black">
                                            {item?.name}
                                        </Box>
                                    </Link>
                                </Box>
                            )
                        })}
                    </Flex>
                    <Flex p="4" justify={"center"}>
                    <ReactPaginate
                        previousLabel={'<<'}
                        nextLabel={'>>'}
                        breakLabel={"..."}
                        pageCount={dataItem?.pageLength}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        activeClassName={"active"}
                        />
                    </Flex>
                </Box>
            </Box>

            <Box backgroundColor="antiquewhite" pt={50} ></Box>
            <Footer/>
        </>
    )
}