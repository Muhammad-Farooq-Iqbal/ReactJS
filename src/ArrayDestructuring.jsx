import React from 'react'
// let name=["muhammad","farooq"]
// let Bio=[24, 'BSSE', "Arid"]
// let info=[...name, ...Bio]
// let [com, ...remaining]=Bio;

// let name={fname:"muhammad",lname:"farooq"}
let Bio={age:24, degree:'BSSE', institute:"Arid"};
  let {age, degree, institute} = Bio

const ArrayDestructuring = () => {
    console.log(institute)
  return (
    <div>
    </div>
  )
}

export default ArrayDestructuring
