import React from 'react'
import "./App.css";

export default function Card({users}) {
    //console.log(users);
    return(  
    <ul>              
       { users.map((user) => {
            
            return (                
            <li>      
                <h3>{user.name}</h3>          
                <h5>Age: {user.age}</h5>
                <h5>Address:</h5>
                <h5>
                    <p> {user.address.city}, {user.address.state}, {user.address.country}</p>
                
                </h5>                      
            </li>        
            )             
            })
        } 
        </ul>

        )
}

