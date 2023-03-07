import React from 'react';

function Boxes({ boxes }) {
  return (
    <div className="boxes-wrapper" style={{display:"flex",height: "200px"}}>
      {boxes.map((boxStyles, index) => (
        <div
          key={index}
          className="box"
          style={boxStyles}
        />
      ))}
    </div>
  );
}

export default React.memo(Boxes);