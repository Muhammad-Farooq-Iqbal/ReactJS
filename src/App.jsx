import React from "react";
function App(props) {
    console.log(props)
    return(
        <>
<div>
    <img src={props.imgsrc} alt="error"/>
    <h1>{props.title}</h1>
    <p>{props.sname}</p>
<a href="https://www.google.com/">
    <button>{props.link}</button>
    </a>
</div>
        </>
    )
    
}
export default App;