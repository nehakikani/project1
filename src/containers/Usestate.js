import React, { useState } from 'react';

function Usestate(props) {
    const[count,setcount]=useState(0);

    return (
        <div>
            <h1>This is {count}</h1>
            <button onClick={()=>setcount(count+1)}>+</button>
            <button onClick={()=>setcount(count-1)}>-</button>

        </div>
    );
}

export default Usestate;