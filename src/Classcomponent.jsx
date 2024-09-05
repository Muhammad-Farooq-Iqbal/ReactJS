import React, {Component} from "react";
 class Greating extends Component {
constructor(props){
super(props);

this.state = {
    message: "Hey, "+ this.props.name
};

this.handleClick=this.handleClick.bind(this);

}
handleClick(){
    this.setState({message:'You clicked me!'})
}

render(){
    return(
<div>
    {/* Displaying the current state message */}
    <h1>{this.state.message}</h1>
    {/* Button that triggers the handleClick method when clicked */}
    <button onClick={this.handleClick}>Click Me</button>
  </div>
    );


}
}

 
 export default Greating