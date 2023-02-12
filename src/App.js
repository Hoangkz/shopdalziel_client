import React from "react";
import routes from "./routes";
import Home from "./pages/home";
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
export default function App() {
  const isLogined = useSelector((state) => state.user.isLogined);
  return (
    <React.StrictMode>
      <HashRouter>
        <BrowserRouter basename="">
          {isLogined ? (
            <Switch>
              <Route path={`/hocvien`} component={routes} />
              <Route path={`/home`} elements={<Home/>} />
              <Route path={`/auth`} component={routes} />
            </Switch>
          ) : (
            <Switch>
              <Route path={`/auth`} component={routes} />
              <Route path={`/home`} elements={<Home/>} />
              <Redirect from="/" to="/auth" />
            </Switch>
          )}
        </BrowserRouter>
      </HashRouter>
    </React.StrictMode>
  );
}