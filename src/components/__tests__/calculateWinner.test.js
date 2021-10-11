import { calculateWinner } from "../../utils";

describe('Game calculator', ()=> {
  it('should return X as winner', ()=> {
    expect(calculateWinner(['X', 'O', 'O', 'X', 'X', 'X', 'O', 'X', 'O'])).toEqual('X')
  });

  it('should return O as winner', ()=> {
    expect(calculateWinner(['O', 'X', 'O', 'O', 'O', 'X', 'X', 'X', 'O'])).toEqual('O')
  })

  it('should return null if no winner', ()=> {
    expect(calculateWinner([null, null, null, null, null, null, null, null, null])).toEqual(null)
  })
})