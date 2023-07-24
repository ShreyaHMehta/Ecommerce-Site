import { useFilter } from "../../filterContext";

import React from 'react'

export default function Sort() {

  const { state, filterDispatch }  = useFilter();
  console.log(state.sortAge);

  const handleSortChange = (option) => {
    filterDispatch({
        type: option,
        payload: option
    });
  };
  
  return (
    <div className="category">
        <div className="category-title">Sort by Age</div>
        <div className="checkbox">
            <label className="sort">
                <input className="input" type="radio" name="age" value="lth" onChange={() => handleSortChange("lth")} />
                <span>Low To High</span>
            </label>
            <label className="sort">
                <input className="input" type="radio" name="age" value="htl" onChange={() => handleSortChange("htl")} />
                <span>High To Low</span>
            </label>
        </div>     

        <div className="category-title">Sort by Address</div>
        <div className="dropdown">
            <label className="sort">
                <input className="input" list="data" name="address" placeholder="Select" onChange={(e) => handleSortChange(e.target.value)} />
                <datalist id="data">
                  <option>Country</option>
                  <option>State</option>
                  <option>City</option>
                </datalist>
            </label>            
        </div>       
    </div>
  )
}

