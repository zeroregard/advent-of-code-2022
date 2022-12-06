import * as fs from 'fs';

export function getDataStream() {
  return fs.readFileSync('day06/input.txt','utf8');
}

export function detectMarker(input: string, bufferLength = 4): number {
  for (let i = 0; i < input.length; i++) {
    const buffer = input.substring(i, bufferLength + i);
    if(!hasDuplicates(buffer)) {
      return i + bufferLength;
    }
  }
  throw new Error('No marker detected');
}

export function hasDuplicates(input: string): boolean {
  const set = new Set();
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    if(set.has(element)) {
      return true;
    }
    set.add(element);
  }
  return false;
}