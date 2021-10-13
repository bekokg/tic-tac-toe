import React, { useReducer } from "react";
import Square from "../Square";
import {defaultState, reducer} from '../../reducers'
import { calculateWinner } from '../../utils'


function Board() {
  const [{ squares, isXNext }, dispatch] = useReducer(reducer, defaultState);
  const winner = calculateWinner(squares);

  return (
    <>
      <div className='board' data-testid="board">
        {squares.map((square, idx) => (
          <Square key={idx} onClick={()=> dispatch({type: 'CLICK', index: idx})} index={idx} type={square} />
        ))}
      </div>
      <div className='message' data-testid='message'>
        {
          winner || squares.every(val => val) ? <>{winner ? `Player ${winner} won` : "It's a Tie"}</> : <>{isXNext ? "X player's turn": "O player's turn"}</>
        }
        </div>
      <div className='control-btn'>
        <button className='rewind' onClick={()=> dispatch({type: 'REWIND'})}>Rewind</button>
        <button className='reset' onClick={()=> dispatch({type: 'RESET'})}>Reset</button>
      </div>
    </>
  )
  
}

export default Board;