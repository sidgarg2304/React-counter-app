import React, { Component } from 'react';
import Counter from './counterComponent';


// rendring multiple component via single component and rendering it back to browser

class Counters extends Component {
    state = { 

        counters :[
            {id:1, value:3},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
     }

// declare handle  delete object that gets value from a function
    handleDelete = (counterId) => {
        console.log("delete handler", counterId);
    }
    render() { 
        return ( <div> 
      {this.state.counters.map(counter =>(
         <Counter 
         key={counter.id} 
         onDelete={this.handleDelete} 
         counter={counter}
         />))}

        </div> );
    }
}
 
export default Counters;