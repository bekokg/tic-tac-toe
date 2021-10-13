import { RESET,REWIND, CLICK } from "./actionTypes";

const defaultSquares = Array(9).fill(null)
export const defaultState = {
  squares: defaultSquares,
  history: [defaultSquares],
  isXNext: true
}

export const reducer = (state, action) => {
  switch(action.type) {
    case CLICK:
      const newSquares = [...state.squares]
      newSquares[action.index] = state.isXNext ? 'X' : 'O';
      return {
        ...state,
        squares: newSquares,
        history: [...state.history, newSquares],
        isXNext: !state.isXNext,
      };
    case REWIND:
      if(state.history.length > 1) {
        const newHistory = [...state.history];
          newHistory.pop()
          const newSquares = newHistory[newHistory.length - 1];
          return {
            ...state,
            squares: newSquares,
            history: newHistory,
            isXNext: !state.isXNext
          }
      };
      return defaultState;
    case RESET:
      return defaultState; 
    default:
      return state;
  }
}