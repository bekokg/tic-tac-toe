import React, {useReducer, useState} from "react";
import Square from "../Square";
import {defaultState, reducer} from '../../reducers'


function Board() {
  // const [{ squares }, dispatch] = useReducer(reducer, defaultState);
const [isXNext, setIsXNext] = useState(true);
const [squares, setSquares] = useState(defaultState.squares);
const [history] = useState([defaultState.squares]);

  function handleClick(index) {
    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X': 'O';
    history.push(newSquares);
    setIsXNext(!isXNext);
    setSquares(newSquares);
  }

  function handleRewind() {
    if(history.length > 1) {
      history.pop();
      const newSquares = history[history.length - 1];
      setSquares(newSquares);
      setIsXNext(!isXNext)
    }
  }
  
  return (
    <>
      <div className='board' data-testid="board">
        {squares.map((square, idx) => (
          <Square key={idx} onClick={()=> handleClick(idx)} index={idx} type={square} />
        ))}
      </div>
      <div className='message' data-testid='message'>{isXNext ? "X player's turn": "O player's turn"}</div>
      <div>
        <button onClick={()=> setSquares(defaultState.squares)}>Reset</button>
        <button onClick={handleRewind}>Rewind</button>
      </div>
    </>
  )
  
}

export default Board;