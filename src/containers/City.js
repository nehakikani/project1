import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        this.state={
            CityName:'surat'
        }
    }
    changeCity=()=>{
        this.setState({
            CityName:'vadodara'
        })
    }
    
    
    render() {
        return (
            <div>
               <p>{this.state.CityName}</p>
               <button onClick={()=>this.changeCity()} className="button">changeCity</button> 
            </div>
        );
    }
}

export default City;