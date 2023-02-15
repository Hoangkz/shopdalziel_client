// import routes from "./routes";

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { publicRoutes } from './routes';

// import { useSelector } from "react-redux";
export default function App() {
  // const isLogined = useSelector((state) => state.user.isLogined);
  console.log(publicRoutes)
  return (
      <Router>
        <Routes>
          {publicRoutes.map((route,index) =>{
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page/>} />
          })}
        </Routes>
      </Router>
  );
}