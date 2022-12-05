import * as fs from 'fs';
import { EMPTY_LINE, NEW_LINE } from '../util';

export interface Instruction {
  count: number;
  from: number;
  to: number;
}
export interface SupplyStackInput {
  crates: string[][];
  instructions: Instruction[];
}

export function getSupplyStackInput(): SupplyStackInput {
  const input = fs.readFileSync('day05/input.txt','utf8').split(EMPTY_LINE);
  return {
    crates: toCrates(input[0]),
    instructions: toInstructions(input[1])
  };
}
export function toCrates(input: string): string[][] {
  const lines = input
    .split(NEW_LINE)
      .slice(0, -1);
  //console.log(input);
  let crateMatrix: string[][] = [];
  const firstLine = lines[0];
  let x = 0;
  for (let hoz = 1; hoz < firstLine.length; hoz+=4) {
    for (let y = lines.length-1; y > -1; y--) {
      const element = lines[y][hoz];
      if(crateMatrix[x] === undefined) {
        crateMatrix[x] = [];
      }
      if(element != ' ') {
        crateMatrix[x].push(element);
      }
    }
    x++;
  }
  return crateMatrix;
}

export function toInstructions(input: string): Instruction[] {
  const lines = input.split(NEW_LINE);
  return lines.map(x => toInstruction(x.split(' ')));
}

export function toInstruction(input: string[]) {
  return ({ count: parseInt(input[1]), from: parseInt(input[3]), to: parseInt(input[5])});
}

export function move_9000(crateMatrix: string[][], count: number, from: number, to: number) {
  for (let i = 0; i < count; i++) {
    const crate = crateMatrix[from-1].pop();
    if(crate) {
      crateMatrix[to-1].push(crate);
    }
  }
  return crateMatrix;
}

export function move_9001(crateMatrix: string[][], count: number, from: number, to: number) {
  const crateStack = crateMatrix[from-1];
  let toMove: string[] = [];
  for (let i = 0; i < count; i++) {
    const crate = crateStack.pop();
    if(crate) {
      toMove.push(crate);
    }
  }
  toMove.reverse();
  toMove.forEach(element => {
    crateMatrix[to-1].push(element);
  });
  return crateMatrix;
}


export function getTopOfStacks(crateMatrix: string[][]) {
  const top: string[] = [];
  crateMatrix.forEach(crateStack => {
    const topElement = crateStack.pop();
    if(topElement) {
      top.push(topElement);
    }
  });
  return top;
}