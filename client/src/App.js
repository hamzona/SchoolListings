import React from "react";
import { Route, Routes } from "react-router";
import InputComp from "./Components/InputComp";
import NavBar from "./NavBar";
import Description from "./Components/Description";
import Services from "./Components/Services";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/publish_services" element={<InputComp />} />
        <Route path="/item/:id" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
