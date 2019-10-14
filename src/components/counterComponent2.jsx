import React, { Component } from 'react';
import Counter from './counterComponent';


// rendring multiple component via single component and rendering it back to browser

class Counters extends Component {
    state = {  }
    render() { 
        return ( <div> 
      < Counter/>
      < Counter/>

      < Counter/>

      < Counter/>

        </div> );
    }
}
 
export default Counters;