import React, { useState } from 'react'

const Form = () => {
      const[text, changeText]=useState("");
      const[name, setName]=useState("");
      const [password, setpassword]=useState("")
      const[savePass,setsavePass]=useState("")
      const onChange=(event)=>{
        changeText(event.target.value);


      };
      const onChange1=(event)=>{
        setpassword(event.target.value)
      }
    const onSubmit=(event)=>{
      event.preventDefault()
   setName(text);
   setsavePass(password)
    };
  return (
    <div>
        <form action="">
        <h1> Hello {name} {savePass}</h1>
            <input type="text" name="" id="" placeholder='pls Enter text' onChange={onChange} />
            <br/>
                <input type="text" name='' id='' placeholder='enter your password' onChange={onChange1}/>

            <br/>
            <button onClick={onSubmit}> click to submit</button>
        </form>
    </div>
  )
}

export default Form
