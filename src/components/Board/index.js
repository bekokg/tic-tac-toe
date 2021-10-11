import React, {useReducer} from "react";
import Square from "../Square";
import {defaultState, reducer} from '../../reducers'


function Board() {
  const [{ squares }, dispatch] = useReducer(reducer, defaultState);

  return (
    <div className='board' data-testid="board">
      {squares.map((square, idx) => <Square key={idx} />)}
    </div>
  )
  
}

export default Board;