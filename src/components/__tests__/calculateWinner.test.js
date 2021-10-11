import { calculateWinner } from "../../utils";

describe('Game calculator', ()=> {
  it('should return X as winner', ()=> {
    expect(calculateWinner(['X', 'O', 'O', 'X', 'X', 'X', 'O', 'X', 'O'])).toEqual('X')
  });
})