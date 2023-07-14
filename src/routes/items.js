import React, { useState } from "react";

import "../App.css";
import Card from '../Card';
import Users from '../users.json';
import SortUsers from '../sortUsers';


export default function Items() {
  const [users, setUsers] = useState(Users);
  
  return (
      <div>         
        {/* old code
        <Card users={Users} />
        <button onClick={() => SortUsers({users: Users}) }><h3>Age</h3></button> */}
       
        <ul>
          {users.map((user) => {
            return <Card user={user} />;
          })}
        </ul>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={() => setUsers(SortUsers({ users: Users }))}>
          <h3>Sort Age Ascending</h3>
        </button>
        <button
          onClick={() => setUsers(SortUsers({ users: Users, reverse: true }))}
        >
          <h3>Sort Age Descending</h3>
        </button>
      </div>
          
      </div>
  )
}