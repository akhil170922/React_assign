import React from "react";
import DesignBasic from "./front-design";
import DashBoard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DesignBasic></DesignBasic>} />
          <Route path="/Dashboard" exact element={<DashBoard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
