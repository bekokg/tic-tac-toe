import React from "react"

function Square({type, onClick, index}) {
  return (
    <button className={`squares ${type || ''}`} onClick={onClick} data-testid={`square-${index}`}>
      {type}
    </button>
  );
}

export default Square;