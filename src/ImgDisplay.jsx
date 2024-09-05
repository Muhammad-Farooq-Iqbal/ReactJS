import React from 'react'

const ImgDisplay = (props) => {
    const img = `https://picsum.photos/400/300?${props.name}`;
  return (
    <>
    <img src={img} alt="error"/>
      
    </>
  )
}

export default ImgDisplay



