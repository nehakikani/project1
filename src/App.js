import  React,{ useEffect, useState } from 'react';
import City from './containers/City';
import CityFun from './containers/CityFun';
import Country from './containers/Country';
import Countryfun from './containers/Countryfun';
import Time from './containers/Time/Time';
import TimeFun from './containers/Time/TimeFun';
import Usestate from './containers/Usestate';
import Loading from './containers/Loading';
import Home from './containers/Home';
import "./App.css";



  const LoadingwithHome =Loading(Home)
function App(props) {
  const [loading, setLoading]=useState(false);
  const  [data, setDate]=useState([]);

let ordata=[{
  id:'101',
  name:'Amit'
}]

  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false); 
      setDate(ordata)}, 1000)
  },[])

  return (
  
      <LoadingwithHome
      isLoading={loading}
      data={data}
      />
    
  );
}

export default App;