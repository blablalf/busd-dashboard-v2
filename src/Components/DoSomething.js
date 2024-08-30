import React from 'react';
import '../Model/Client.js';

function DoSomething() {
  // La fonction qui sera déclenchée lors du clic sur le bouton
  const handleClick = () => {
    console.log('Clicked !');
  };

  return (
    <button onClick={handleClick}>
      {/* getClient() */}
    </button>
  );
}

export default DoSomething;
