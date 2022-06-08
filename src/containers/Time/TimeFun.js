import React, { useEffect,useState } from 'react';

function TimeFun(props) {
    const[time,setTime]=useState(new Date());

    const tick= ()=> {
        setTime(new Date());
    }

    useEffect(() => {  
        //componentDidMount,compomentsDidUpdate

    const timeI=setInterval(()=>tick(),1000);

        //componentwilUnmount
    return()=>{
        clearInterval(timeI);
    }
    },[time]);

    return (
        <div>
            <p>{time.toLocaleString()}</p>
        </div>
    );
}

export default TimeFun;
