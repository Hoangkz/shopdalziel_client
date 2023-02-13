import React from "react";
import routes from "./routes";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { useSelector } from "react-redux";
export default function App() {
  const isLogined = useSelector((state) => state.user.isLogined);
  return (
      <Router basename="">
          <Route path={`/home`} element={Home} />
      </Router>
  );
}