import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layout/default';
// import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from 'react';
// import { checkTokenSelector } from './redux/selectors';
// import authApi from './API/authApi';
// import authSlice from './components/auth';
// import jwt_decode from "jwt-decode";

export default function App() {
  // const token = useSelector(checkTokenSelector);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const form = {
  //         refresh_token:token
  //       }
  //       const res = await authApi.refreshToken(form)
  //       const data = res.data
  //       const decoded = jwt_decode(data.token);
  //       dispatch(authSlice.actions.login({ checkLogin: true, user: decoded, token: data.token, refresh_token: token }));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

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