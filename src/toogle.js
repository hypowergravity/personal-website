import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setEventData(event);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      {eventData && (
        <p>
          Key pressed: {eventData.key}, Code: {eventData.code}
        </p>
      )}
    </div>
  );
}

export default MyComponent;