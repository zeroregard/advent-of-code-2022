import { Coordinates, Direction } from "./models";

export function getAdjacentCoords(coords: Coordinates, dir: Direction): Coordinates {
  switch(dir) {
    case Direction.UP:
      return { x: coords.x, y: coords.y - 1};
    case Direction.RIGHT:
      return { x: coords.x + 1, y: coords.y};
    case Direction.DOWN:
      return { x: coords.x, y: coords.y + 1};
    case Direction.LEFT:
      return { x: coords.x - 1, y: coords.y};
  }
}