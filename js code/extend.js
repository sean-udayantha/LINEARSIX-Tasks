Date.prototype.daysTo = function (otherDate) {
    const msInDay = 24 * 60 * 60 * 1000; 
    const diffTime = Math.abs(otherDate - this);
    return Math.floor(diffTime / msInDay);
  };
  
 
  const d1 = new Date("2023-01-04");
  const d2 = new Date("2023-01-05");
  console.log(d1.daysTo(d2));
  