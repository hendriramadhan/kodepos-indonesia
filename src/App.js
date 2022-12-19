import "./App.css";
import Menu from "./component/menu";
import React from "react";
import Index from "./component/Index";
import { Route, Routes } from "react-router-dom";
import Contact from "./component/contact";
import Privacy from "./component/privacy";
import About from "./component/about";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/component/contact" element={<Contact />} />
        <Route path="/component/privacy" element={<Privacy />} />
        <Route path="/component/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
