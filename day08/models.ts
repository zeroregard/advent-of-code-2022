export interface TreeNode {
  height: number;
  left?: TreeNode;
  up?: TreeNode;
  right?: TreeNode;
  down?: TreeNode;
}

export enum Direction {
  UP,
  RIGHT,
  DOWN,
  LEFT
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface VisibilityResult {
  visible: boolean;
  viewingDistance: number;
}