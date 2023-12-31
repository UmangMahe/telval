import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/telval/">
    <Provider store={rootReducer}>
      <App />
    </Provider>
  </BrowserRouter>
);
