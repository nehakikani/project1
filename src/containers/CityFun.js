import React, { useState } from 'react';

function CityFun(props) {

    const [CityName,setCityName]=useState('vadodara');

    const changeCity=()=>{
        setCityName('vapi');
    } 

    return (
        <div>
           <p>{CityName}</p>
           <button onClick={()=>changeCity()}>changeCity</button> 
        </div>
    );
}

export default CityFun;