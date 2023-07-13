import React from 'react'

import "./App.css";
import Card from './Card';
import Users from './users.json';
import SortUsers from './sortUsers';


export default function App() {
  return (
      <div>
          
        
        <Card users={Users} />
        <button onClick={() => SortUsers({users: Users}) }><h3>Age</h3></button>
          
      </div>
  )
}