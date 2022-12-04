import * as fs from 'fs';
import { NEW_LINE } from '../util';

export interface AssignmentPair {
  areaA: number[];
  areaB: number[];
}

export function getAssignmentPairs(): AssignmentPair[] {
  return fs.readFileSync('day04/input.txt','utf8')
    .split(NEW_LINE)
    .map(input => input.split(','))
    .map(pairs => ({ areaA: getFullArea(pairs[0]), areaB: getFullArea(pairs[1])}));
}

/**
 * [someFunction description]
 * @param  {[string]} areaShort [e.g. 1-6]
 * @return {[string]} [full version as array, e.g. [1,2,3,4,5,6]]
 */
export function getFullArea(areaShort: string): number[] {
  const split = areaShort.split('-');
  const from =  parseInt(split[0]);
  const to = parseInt(split[1]);
  const fullArea: number[] = []
  for (let i = from; i < to + 1; i++) {
    fullArea.push(i);
  }
  return fullArea;
}

function fullAreaString(area: number[]): string {
 let areaString = '-';
 area.forEach(num => {
    areaString += `${num}-`
 });
 return areaString;
}

export function areaFullyContainsOther(areaA: number[], areaB: number[]): boolean {
  const areaAString = fullAreaString(areaA);
  const areaBString = fullAreaString(areaB);
  return areaAString.includes(areaBString) || areaBString.includes(areaAString);
}

export function areaOverlapsOther(areaA: number[], areaB: number[]): boolean {
  for (let i = 0; i < areaA.length; i++) {
    const section = areaA[i];
    if(areaB.includes(section)) {
      return true;
    }
  }
  return false;
}