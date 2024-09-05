import React, { useState } from "react";

function SexyProfileForm() {
  const [formData, setFormData] = useState({
    sexyName: "",
    sexyEmail: "",
    sexyAddress: "",
  });

  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    setFormData((prevData) => ({
      
      
      ...prevData,
   
      [name]: value, // Dynamically update state based on input's name
    }));
    // setFormData((prevData)=>{
    //   if (name==="sexyName") {
    //     return({sexyName:value,
    //         sexyEmail:prevData.sexyEmail})
        
        
    //   } else if (name==="sexyEmail"){
    //     return(
    //       {sexyEmail:value,
    //         sexyName:prevData.sexyName
            
    //       })}
    // })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.sexyName}, Email: ${formData.sexyEmail}, Address: ${formData.sexyAddress}`);
  };

  return (
    <form onSubmit={handleSubmit}>
    <h1>{formData.sexyName} {formData.sexyEmail}</h1>
    <p> {formData.sexyAddress}</p>
      <input
        type="text"
        name="sexyName" // Unique identifier
        value={formData.sexyName} // Tied to React state
        onChange={handleChange}
        placeholder="Your sexy name"/>
      <input
        type="email"
        name="sexyEmail" // Unique identifier
        value={formData.sexyEmail} // Tied to React state
        onChange={handleChange}
        placeholder="Your sexy email"
      />
      <input type="text" name="sexyAddress" value={formData.sexyAddress}  placeholder="pls enter your address"onChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SexyProfileForm;
