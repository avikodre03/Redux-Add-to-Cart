import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      setCurrentDateTime(new Date());
   
    }, []);
  
    const formatDate = (date) => {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
  
    return (
      <div style={{display:"flex"}}>  
      <p>Invoice Date : </p>&nbsp;
        <p>  {formatDate(currentDateTime)}</p>
        <p style={{margin:"0 10px"}}>{currentDateTime.toLocaleTimeString()}</p>
      </div>
    );
};

export default DateTimeDisplay;
