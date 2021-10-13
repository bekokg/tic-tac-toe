import React from "react"

function Square({type, onClick, index, allDisabled}) {
  return (
    <button className={`squares ${type || ''}`} onClick={onClick} disabled={type || allDisabled ? true : false} data-testid={`square-${index}`}>
      {type}
    </button>
  );
}

export default Square;