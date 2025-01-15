import React from "react";
import ReactDOM from "react-dom/client"; // Use ReactDOM from 'react-dom/client' for React 18
import { Provider } from "react-redux";
import store from "./Redux/store";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot instead of render

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
