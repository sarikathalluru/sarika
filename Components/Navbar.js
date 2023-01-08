import React from 'react';
import Child from './Child';

class Navbar extends React.Component{
    state={
        name:"sarika"
    }
    render(){
    return(
        <div>
             
           <h1>class based Component</h1>
           <Child xyz={this.state.name} />
          
        </div>
    )
}
}
export default Navbar;