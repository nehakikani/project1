import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        //1//used to set initial value to the component.
        this.state={
            Time:new Date()
        }
    }
    tick=()=>{
        this.setState({
            Time:new Date()
        })
    }

    componentDidMount=()=>{
        //3// used to request data from server.
        this.TimeI=setInterval(()=> this.tick(),1000);
    }

    componentDidUpdate=(prevprops,prevstate)=>{
        //4//called whenever particular state/props updated.
        if(this.state.Time!==prevstate.time){
            console.log("componentDidUpdate");
        }
    }

    componentWillUnmount=()=>{
        //5//called whenever we move to another component (used to realse the resources).
        clearInterval(this.TimeI);
    }
    //2//called whenever state value changed.
    render() {
        return (
            <div>
              <p>{this.state.Time.toLocaleTimeString()}</p>  
            </div>
        );
    }
}

export default Time;