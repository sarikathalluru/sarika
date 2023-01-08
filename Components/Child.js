import React from "react";

class Child extends React.Component{
    render(){
        return(
            <div>
                <p>child is calling into Navbar</p>
                <h2>{this.props.xyz}</h2>
            </div>
        )
    }
}
export default Child;