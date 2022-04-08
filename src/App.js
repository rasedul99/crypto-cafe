import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Coins from "./components/Coins/Coins";
import Contract from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<Homepage />}></Route>
        <Route path="/coins" element={<Coins />}></Route>
        <Route path="/contract" element={<Contract />}></Route>
        <Route path="/about" element={<About />}></Route> */}
      </Routes>
    </div>
  );
};

export default App;
