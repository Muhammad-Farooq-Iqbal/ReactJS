// src/About.jsx
import React from 'react';

function About(props) {
  return (
    <div>
      <h1> About Page</h1>
      <p>This is the about page where we talk {props.name} our company.</p>
    </div>
  );
}

export default About;
