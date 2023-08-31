import React from "react";
import Header from "./Components/Header";
import { Route,Routes } from "react-router-dom";
import Carddetails from "./Components/Carddetails";
import Cards from "./Components/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home"
import "./App.css";

function App() {
  return (
    <div className="App">
     
      <Header/>
      <Routes>
        {/* <Route path="/cards" element={<Cards/>}/> */}
         <Route path="/" element={<Cards/>}/>
         <Route path='/cart/:id' element={<Carddetails />} />
         <Route path="home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
