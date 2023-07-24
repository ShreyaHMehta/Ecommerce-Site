import React from "react";

import "../App.css";
import Card from '../Card';
import Users from '../users.json';
// import SortUsers from '../sortUsers';
import {useFilter} from "../filterContext";

export default function Items() {
  // const [users, setUsers] = useState(Users);
  const {state} = useFilter(); 

  const getSortedItems = (Users, sortAge) => {
    const sortedItems = (sortAge === "lth")
    ? [...Users].sort((a, b) => a.age - b.age)
    : (sortAge === "htl") ? [...Users].sort((a, b) => b.age - a.age)
    : Users;  

    return sortedItems;
  }

  const getSortedByAge = (Users, sortAdd) => {
    const sortedAddress = (sortAdd === "Country")
    ? [...Users].sort((a, b) => a.address.country.localeCompare(b.address.country) )
    : (sortAdd === "State") ? [...Users].sort((a, b) => a.address.state.localeCompare(b.address.state))
    : (sortAdd === "City") ? [...Users].sort((a, b) => a.address.city.localeCompare(b.address.city))
    : Users; 

    return sortedAddress;
  }

  const sortedItems = getSortedItems(Users, state.sortAge);
  const sortedAddress = getSortedByAge(sortedItems, state.sortAdd);

  return (
      <div>         
        {/* old code
        <Card users={Users} />
        <button onClick={() => SortUsers({users: Users}) }><h3>Age</h3></button> */}
       
        <ul>
          {sortedAddress.map((User) => {
            return <Card user={User} />;
          })}
        </ul>       
                    
          
        {/* <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={() => setUsers(SortUsers({ users: Users }))}>
          <h3>Sort Age Ascending</h3>
        </button>
        <button
          onClick={() => setUsers(SortUsers({ users: Users, reverse: true }))}
        >
          <h3>Sort Age Descending</h3>
        </button>
      </div> */}
          
      </div>
  )
}