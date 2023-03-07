import React from 'react';

function MegaBoost({ handleClick }) {
  console.log('Render MegaBoost');
  
  return (
    <button
      className="mega-boost-button"
      onClick={handleClick}
    >
      MEGA BOOST!
    </button>
  );
}

export default React.memo(MegaBoost);