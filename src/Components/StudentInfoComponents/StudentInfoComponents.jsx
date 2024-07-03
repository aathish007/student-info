import React, { useState } from 'react'
import './StudentInfoComponents.css';


const StudentInfoComponents = () => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="photo-container">
          <img src="data:image/png;base64,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" alt="Profile" />
        </div>
        <h2>Name: John Doe</h2>
        <p>Registration No: 123456</p>
        <button className="toggle-button" onClick={toggleVisibility}>
          {isVisible ? 'Hide Details' : 'Show Details'}
        </button>
        <div className={`additional-content ${isVisible ? 'visible' : ''}`}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nihil hic explicabo assumenda placeat quod error</p>
        </div>
      </div>
    </div>
  )
}

export default StudentInfoComponents