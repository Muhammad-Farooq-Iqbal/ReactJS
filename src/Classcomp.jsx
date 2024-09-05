import React, {Component} from "react";
 class Intro extends Component{
    constructor(props){
super(props); 

this.state={
    message: "Hey, My name is " + this.props.name
}

this.handleClick=this.handleClick.bind(this);
    }
handleClick(){
    this.setState({message: "you click me right now!!!"})
}
render(){
return(

    <div>
    <h1>{this.state.message}</h1>
    <button onClick={this.handleClick}>click me!!!</button>

</div>
)
}

    }

 export default Intro
