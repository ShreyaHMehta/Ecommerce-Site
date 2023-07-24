import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";

// import Home from "./routes/Home";
import Items from  "./routes/items";
import Cart from "./routes/Cart";
import Orders from "./routes/Orders";


export default function App() {  
  return (
        <Router>                    
          <Navbar />
          <Sidebar />
          <div className="content">

            <Routes>
              {/* <Route exact path="/" element={<Home />} />  */}
              <Route path='/' element={<Items />} />
              <Route path='/Orders' element={<Orders />} />
              <Route path='/Cart' element={<Cart />} />
          </Routes>     
        </div>           
      </Router>     
      
  );
}