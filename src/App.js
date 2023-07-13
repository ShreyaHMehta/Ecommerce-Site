import React, { useState } from "react";

import "./App.css";
import Card from "./Card";
import Users from "./users.json";
import SortUsers from "./sortUsers";

function App() {
  const [users, setusers] = useState(Users);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <Card user={user} />;
        })}
      </ul>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={() => setusers(SortUsers({ users: Users }))}>
          <h3>Sort Age Ascending</h3>
        </button>
        <button
          onClick={() => setusers(SortUsers({ users: Users, reverse: true }))}
        >
          <h3>Sort Age Descending</h3>
        </button>
      </div>
    </div>
  );
}

export default App;
