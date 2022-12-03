
import { NEW_LINE } from '../util';
import { getRounds } from './shared';


const rockValue = 1;
const paperValue = 2;
const scissorValue = 3;

const scoreBoard: {[ key: string] : number} = {
  'A': rockValue,
  'B': paperValue,
  'C': scissorValue,
  'X': rockValue,
  'Y': paperValue,
  'Z': scissorValue
};

const roundResultPoints: {[ key: number] : number} = {
  0: 3, // draw
  1: 0, // loss
  2: 6 // win
}

function determineWinPoints(inputA: number, inputX: number): number {
  let winLossKey = (inputA - inputX)%3;
  if(winLossKey < 0) {
    winLossKey += 3;
  }
  return roundResultPoints[winLossKey];
}

function resolveRound(inputA: string, inputX: string): number {
  const scoreA = scoreBoard[inputA]; 
  const scoreX = scoreBoard[inputX]; 
  const winLossScore = determineWinPoints(scoreA, scoreX);
  return scoreX + winLossScore;
}

console.log(resolveRound('A', 'Y') === 8);
console.log(resolveRound('B', 'X') === 1);
console.log(resolveRound('C', 'Z') === 6);

const rounds = getRounds();

const totalScore = rounds
  .map(guide => resolveRound(guide[0], guide[2]))
  .reduce((a, b) => a + b, 0);
console.log(totalScore);
