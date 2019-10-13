import React, { Component } from 'react';

// counter class will inherit methods from Component class
class Counter extends Component {

    // any data that component needs
   state = { 
       count: 0,
       imageURL:'https://picsum.photos/200'

    };
    render() { 
        
        let color = this.getBadgeClasses();

        
        return (
            
        <div>
            <h1> hello Sid </h1> 
      
           <h1>  <img src={this.state.imageURL} alt =""/> </h1>
            
{/*
how to comemnt in jsx 
 any java script expression bettween curly braces 
*/}
        <h1> <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
         <button className="btn btn-secondary btn-sm">Increment</button> </h1>
        

        
        </div>);
    }

    getBadgeClasses() {
        let color = "badge badge-";
        color += this.state.count === 0 ? "warning" : "primary";
        return color;
    }

    formatCount() {
        const {count}= this.state;

        //return count===0? <h1>Zero</h1> : count;
        return count===0 ? "Zero  " :count;

    }
}
 
export default Counter;