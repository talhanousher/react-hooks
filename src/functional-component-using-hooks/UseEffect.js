import React, { useState, useEffect } from 'react';

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);

  const handleCountChange = () => {
    setCount(count + 1);
  }
  useEffect(() => {
    document.title = `${count} times`
  });

  return <div className="functional-component">
    <button onClick={handleCountChange}>Click Me!</button>
  </div>
}

export default UseEffectComponent;