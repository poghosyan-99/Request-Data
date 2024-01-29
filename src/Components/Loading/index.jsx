import React, { useState, useEffect } from 'react';
import './style.css';

function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="Loading-container">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="content"></div>
      )}
    </div>
  );
}

export default Loading;