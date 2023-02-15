// import routes from "./routes";
import Home from "./pages/home";
import Items from "./pages/items";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


// import { useSelector } from "react-redux";
export default function App() {
  // const isLogined = useSelector((state) => state.user.isLogined);

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/items" element={<Items/>}/>
        </Routes>
      </Router>
  );
}