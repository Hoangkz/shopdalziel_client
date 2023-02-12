import React from "react";
import routes from "./routes";
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
  BrowserRouter,
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
              <Route path={`/auth`} component={routes} />
              <Redirect from="/" to="/hocvien" />
            </Switch>
          ) : (
            <Switch>
              <Route path={`/auth`} component={routes} />
              <Redirect from="/" to="/auth" />
            </Switch>
          )}
        </BrowserRouter>
      </HashRouter>
    </React.StrictMode>
  );
}