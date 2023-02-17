import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { publicRoutes } from './routes';

import { useSelector } from "react-redux";
export default function App() {
  const isLogined = useSelector((state) => state.user.isLogined);
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          {publicRoutes.map((route,index) =>{
            const Page = route.element;
            return <Route key={index} path={route.path} element={<Page/>} />
          })}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}