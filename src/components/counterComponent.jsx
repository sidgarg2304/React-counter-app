import React, { Component } from 'react';

// counter class will inherit methods from Component class
class Counter extends Component {

    // any data that component needs
   state = { 
       count: 0,

    };
    render() { 
        return (
        <div>
            <h1> hello Sid </h1> 

            // any java script expression bettween curly braces

            <span>{this.formatCount()}</span>
        <button>Increment</button>
        </div>);
    }

    formatCount() {
        const {count}= this.state;

        return count==0 ? "Zero" :count;

    }
}
 
export default Counter;