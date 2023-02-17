import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layout/default';
import { useSelector } from "react-redux";
import { Fragment } from 'react';
export default function App() {
  const isLogined = useSelector((state) => state.user.isLogined);
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.element;
            let Layout = DefaultLayout
            if(route.layout){
              Layout = route.layout
            }
            else if(route.layout===null){
              Layout = Fragment
            }
            return <Route key={index}
                          path={route.path}
                          element={
                            <Layout>
                              <Page />
                            </Layout>
                          }/>
          })}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}