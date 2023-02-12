import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
      <ToastContainer autoClose={2000} draggablePercent={60} />
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
