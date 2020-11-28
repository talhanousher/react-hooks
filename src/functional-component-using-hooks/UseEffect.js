import React, { useState, useEffect } from 'react';

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const handleCountChange = () => {
    setCount(count + 1);
  }
  useEffect(() => {
    document.title = `${count} times`
  });
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize');
    }
  }, []);

  return <div className="functional-component">
    <button onClick={handleCountChange}>Click Me!</button>
    <div>
      WIDTH: {width}
    </div>
  </div>
}

export default UseEffectComponent;