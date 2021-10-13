import React, {useReducer, useState} from "react";
import Square from "../Square";
import {defaultState, reducer} from '../../reducers'
import { calculateWinner } from '../../utils'


function Board() {
  // const [{ squares }, dispatch] = useReducer(reducer, defaultState);
const [isXNext, setIsXNext] = useState(true);
const [squares, setSquares] = useState(defaultState.squares);
const [history, setHistory] = useState([defaultState.squares]);
const winner = calculateWinner(squares);

  function handleClick(index) {
    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X': 'O';
    setHistory([...history, newSquares])
    setIsXNext(!isXNext);
    setSquares(newSquares);
  }

  function handleRewind() {
    if(history.length > 1) {
      const newHistory = [...history];
      newHistory.pop()
      const newSquares = newHistory[newHistory.length - 1];
      setHistory(newHistory)
      setSquares(newSquares);
      setIsXNext(!isXNext)
    }
  }

  function handleReset() {
    setSquares(defaultState.squares)
    setIsXNext(true)
    setHistory([defaultState.squares])
  }

  return (
    <>
      <div className='board' data-testid="board">
        {squares.map((square, idx) => (
          <Square key={idx} onClick={()=> handleClick(idx)} index={idx} type={square} />
        ))}
      </div>
      <div className='message' data-testid='message'>
        {winner ? `Player ${winner} won` : isXNext ? "X player's turn": "O player's turn"}
        </div>
      <div className='control-btn'>
        <button className='rewind' onClick={handleRewind}>Rewind</button>
        <button className='reset' onClick={handleReset}>Reset</button>
      </div>
    </>
  )
  
}

export default Board;