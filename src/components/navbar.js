import React from 'react'
import "../App.css";

import {  Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className='navbar-list'>
        {/* <li>
        <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/">Items</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>        
      </ul>
    </nav>
  )
}

export default Navbar
