import React from 'react'

class Classincrement extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0,
            name : "sarika",
            age : 30
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment(){
        this.setState(value => ({
            count : value.count + 1,
        }));
    }
    decrement(){
        this.setState(value => ({
            count : value.count - 1,
        }));
    }
    componentDidMount(){
        console.log("initialise");
    }
    componentDidUpdate(){
        console.log("value updation");
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <h1>{this.state.age}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
export default Classincrement