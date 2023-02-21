import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layout/default';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refresh_tokenSelector, TokenSelector } from './redux/selectors';
import jwt_decode from "jwt-decode";
import axiosClient from './API/axiosClient';
import authSlice from './components/auth';
import { toast } from 'react-toastify';



export default function App() {
   
    const dispatch = useDispatch();
    const token = useSelector(TokenSelector);
    const refresh_token = useSelector(refresh_tokenSelector);
    
    useEffect(()=>{
        if(token) {
            const decoded = jwt_decode(token);
            if (decoded.exp < Date.now() / 1000) {
                axiosClient.post('/auth/refresh-token', { refresh_token: refresh_token })
                    .then(response => {
                        const new_token = response.data.token;
                        localStorage.setItem("refresh_token", refresh_token);
                        const decoded = jwt_decode(token);
                        const dataUser = JSON.stringify(decoded.data)
                        const userNewToken = JSON.parse(dataUser)
                        // console.log(decoded);
                        localStorage.setItem("user", dataUser);
                        localStorage.setItem('token', new_token);
                        dispatch(authSlice.actions.login({ checkLogin: true, user: userNewToken, token: new_token, refresh_token: refresh_token }));
                    })
                    .catch(error => {
                        localStorage.setItem("token", "null");
                        localStorage.setItem("refresh_token", "null");
                        localStorage.setItem("user", "null");        
                        dispatch(authSlice.actions.login({ checkLogin: false, user: null, token: null, refresh_token: null }));
                        toast.warning(error.response.data.message);
                    })
            }
        }
    },[token,refresh_token])
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.element;
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            }
            else if (route.layout === null) {
              Layout = Fragment
            }
            return <Route key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          })}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}