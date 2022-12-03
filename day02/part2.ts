import * as fs from 'fs';
import { NEW_LINE } from '../util';
import { getInputPoints, getInputType, getResultPoints, InputType, RoundResult } from './shared';

function getOtherInput(input: InputType, result: RoundResult) {
  let otherInput = (input + result) % 3;
  if(otherInput < 0) {
    otherInput += 3;
  }
  return otherInput as InputType;
}

function getRoundResult(input: string): RoundResult {
  switch(input) {
    case 'X':
      return RoundResult.LOSE;
    case 'Y':
      return RoundResult.DRAW;
    case 'Z':
      return RoundResult.WIN;
  }
  throw Error(`Unsupported input type ${input}`);
}

function resolveRound(rawInput: string, rawResult: string): number {
  const firstInput = getInputType(rawInput);
  const roundResult = getRoundResult(rawResult);
  const otherInput = getOtherInput(firstInput, roundResult);
  
  const resultPoints = getResultPoints(roundResult);
  const inputPoints = getInputPoints(otherInput);
  return inputPoints + resultPoints;
}

console.log(resolveRound('A', 'X') === 3);
console.log(resolveRound('A', 'Y') === 4);
console.log(resolveRound('A', 'Z') === 8);
console.log(resolveRound('B', 'X') === 1);
console.log(resolveRound('B', 'Y') === 5);
console.log(resolveRound('B', 'Z') === 9);
console.log(resolveRound('C', 'X') === 2);
console.log(resolveRound('C', 'Y') === 6);
console.log(resolveRound('C', 'Z') === 7);

const strategyGuide = fs.readFileSync('day02/input.txt', 'utf8');

const guides = strategyGuide.split(NEW_LINE);


const totalScore = guides
  .map(guide => resolveRound(guide[0], guide[2]))
  .reduce((a, b) => a + b, 0);
console.log(totalScore);