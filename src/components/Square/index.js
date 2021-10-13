import React from "react"

function Square({type, onClick, index}) {
  return (
    <button className={`squares ${type || ''}`} onClick={onClick} disabled={type ? true : false} data-testid={`square-${index}`}>
      {type}
    </button>
  );
}

export default Square;