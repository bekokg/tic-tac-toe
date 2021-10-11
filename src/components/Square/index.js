import React from "react"

function Square({type, onClick}) {
  return <button className='squares' onClick={onClick} data-testid='square'>{type}</button>
}

export default Square;