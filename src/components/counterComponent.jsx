import React, { Component } from 'react';

// counter class will inherit methods from Component class
class Counter extends Component {

    // any data that component needs
   state = { 
       count: 0,
       imageURL:'https://picsum.photos/200',
       value:this.props.counter.value


    };

    // constructor(){
    //     super();
    //     this.handleIncrement= this.handleIncrement.bind(this);
    // }

     handleIncrement = () => {
         console.log("increment clicked", this);

         this.setState({ count : this.state.count+1});
     }

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
         <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button> </h1>
        
         <button onClick ={ () => this.props.onDelete(this.props.counter.id)}
         className="btn btn-danger btn-sm m-2"> Delete </button>
        
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