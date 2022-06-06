import React, { useState } from 'react';

function Countryfun(props) {
    const [CountryName,setCountryName]=useState('America');

    const changeCountry=()=>{
        setCountryName('Canada');
    } 


    return (
        <div>
           <p>{CountryName}</p>
           <button onClick={()=>changeCountry()}>changeCountry</button>  
        </div>
    );
}

export default Countryfun;