import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/navbar";
import Home from "./routes/Home";
import Items from  "./routes/items";
import Cart from "./routes/Cart";
import Orders from "./routes/Orders";

export default function App() {  
  return (
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/Items' component={Items} />
        <Route path='/Orders' component={Orders} />
        <Route path='/Cart' component={Cart} />
      </Routes>
        
          
      </Router>     
  )
}