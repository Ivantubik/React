import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import Navigation from "./pages/Navigation";

import Author from "./pages/Author";
import ItemDetal from "./pages/ItemDetal";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import CreateYours from "./pages/CreateYours";




function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/itemDetal" element={<ItemDetal/>}/>
      <Route path="/author" element={<Author/>}/>
      <Route path="/createyours" element={<CreateYours/>}/>
     </Routes>
    </Router>
  );
}

export default App;
