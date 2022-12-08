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