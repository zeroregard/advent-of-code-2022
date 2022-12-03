import * as fs from 'fs';
import { NEW_LINE } from '../util';

export enum InputType {
  ROCK = 0,
  PAPER = 1,
  SCISSORS = 2,
}

export enum RoundResult {
  LOSE = -1,
  DRAW = 0,
  WIN = 1
}

export function getRounds() {
  const strategyGuide = fs.readFileSync('day02/input.txt', 'utf8');
  return strategyGuide.split(NEW_LINE);
}

export function getResultPoints(result: RoundResult): number {
  switch(result) {
    case RoundResult.LOSE:
      return 0;
    case RoundResult.DRAW:
      return 3;
    case RoundResult.WIN:
      return 6;
  }
}

export function getInputType(input: string): InputType {
  switch(input) {
    case 'A':
    case 'X':
      return InputType.ROCK;
    case 'B':
    case 'Y':
      return InputType.PAPER;
    case 'C':
    case 'Z':
      return InputType.SCISSORS;
  }
  throw Error(`Unsupported input type ${input}`);
}

export function getInputPoints(input: InputType) {
  return input + 1;
}

export const winLossBoard: {[ key: number] : number} = {
  0: 3, // draw
  1: 0, // loss
  2: 6 // win
}