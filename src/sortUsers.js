import React, {useState} from 'react'

import Card from './Card';

export default function SortUsers({users}) {
    
    const [data, setData] = useState(users);

    const SortAge = () => {
        const dt = [...data].sort((a, b) => a.age - b.age);
        setData(dt);
        // console.log(data);    
    }

  return (
    //SortAge(),
    console.log(data),
    <div>
        
          {/* <Card users={data} />           */}
    </div>
  )
}

