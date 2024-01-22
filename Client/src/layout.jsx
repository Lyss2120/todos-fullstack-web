import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/AppContext.jsx";

import App from "./App";

//create your first component
const Layout = () => {
<App />

};

export default injectContext(App);