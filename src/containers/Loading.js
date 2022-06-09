import React from 'react';

function Loading(Component) {
    return function Loader({isLoading , data}){
        if(isLoading){
            return(
               <p>Neha .....</p>
            )
        }else{
            return(<Component data ={data}/>
            )
        }
    }
}

export default Loading;