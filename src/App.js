import React from "react";
// import routes from "./routes";
import Home from "./pages/home";
import { BrowserRouter, 
        Route,
        Routes
        // Link 
      } from "react-router-dom";
console.log(Routes);

// import { useSelector } from "react-redux";
export default function App() {
  // const isLogined = useSelector((state) => state.user.isLogined);
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path={`/home`} element={Home}/>
        <Route path={`/`} element={Home}/>
      </Routes>
    </BrowserRouter>
  );
}