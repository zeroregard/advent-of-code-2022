import * as fs from 'fs';
import { NEW_LINE } from '../util';
import { Coordinates, Direction, VisibilityResult } from './models';
import { getAdjacentCoords, safe2DGet } from './util';

export function getForestInput(): string {
  return fs.readFileSync('day08/input.txt','utf8');
}

export function getTreeHeights(input: string): number[][] {
  return input
  .split(NEW_LINE)
  .map(treeLine => treeLine.split('')
    .map(treeHeight => parseInt(treeHeight))
  );
}

export function visibleInDirection(nodes: number[][], coords: Coordinates, dir: Direction): VisibilityResult {
  const tree = nodes[coords.y][coords.x];
  let distance = 0;
  let pointer: Coordinates = { x: coords.x, y: coords.y };
  let adjacentTree: number | undefined = nodes[pointer.y][pointer.x];
  while(adjacentTree !== undefined) {
    pointer = getAdjacentCoords(pointer, dir);
    adjacentTree = safe2DGet(nodes, pointer.y, pointer.x);
    if(adjacentTree !== undefined && adjacentTree >= tree) {
      return { visible: false, viewingDistance: distance + 1 };
    }
    if(adjacentTree !== undefined) {
      distance += 1;
    }
  }
  return { visible: true, viewingDistance: distance };
}

function getVisiblityResults(nodes: number[][], coords: Coordinates): VisibilityResult[] {
  return [ 
    visibleInDirection(nodes, coords, Direction.LEFT),
    visibleInDirection(nodes, coords, Direction.UP),
    visibleInDirection(nodes, coords, Direction.RIGHT),
    visibleInDirection(nodes, coords, Direction.DOWN)
  ];
}

export function visible(nodes: number[][], coords: Coordinates): boolean {
  return getVisiblityResults(nodes, coords).some(x => x.visible);
}

export function getVisibleTreeCount(treeNodes: number[][]): number {
  let count = 0;
  for (let y = 0; y < treeNodes.length; y++) {
    const line = treeNodes[y];
    for (let x = 0; x < line.length; x++) {
      count += visible(treeNodes, { x, y}) ? 1 : 0;
    }
  }
  return count;
}

export function getScenicScore(nodes: number[][], coords: Coordinates): number {
  return getVisiblityResults(nodes, coords).map(x => x.viewingDistance).reduce((a, b) => a*b);
}

export function getHighestScenicScore(treeNodes: number[][]): number {
  let highest = 0;
  for (let y = 0; y < treeNodes.length; y++) {
    const line = treeNodes[y];
    for (let x = 0; x < line.length; x++) {
      const score = getScenicScore(treeNodes, { x, y });
      highest = Math.max(highest, score);
    }
  }
  return highest;
}