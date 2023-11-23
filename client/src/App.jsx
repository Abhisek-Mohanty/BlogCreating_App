import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Create from "./component/Create";
import Blogs from "./component/Blogs";
import One from "./component/One";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route element={<Create />} path="/create"></Route>
          <Route element={<Blogs />} path="/blogs"></Route>
          <Route element={<One />} path="/:abc"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
