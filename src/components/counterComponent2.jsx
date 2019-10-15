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


     handleIncrement=()=>{
     console.log("Increment handler");
     };

// declare handle  delete object that gets value from a function
    handleDelete = (counterId) => {
        console.log("delete handler", counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);

        this.setState({counters});
    }

    // handleReset = () =>{

    //     const counters=this.state.counters.map(c => {
    //         c.value=0;
    //         return c;
    //     })

    //     this.setState({counters});
    // };
    render() { 
        return ( <div> 

            <button 
            //onClick={this.handleReset}
            className="btn btn-primary btn-2 m-2">Reset</button>
      {this.state.counters.map(counter =>(
         <Counter 
         key={counter.id} 
         onDelete={this.handleDelete} 
         onIncrement={this.handleIncrement}
         counter={counter}
         />))}

        </div> );
    }
}
 
export default Counters;