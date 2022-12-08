import { Direction } from "./models";
import { getHighestScenicScore, getScenicScore, getTreeHeights, getVisibleTreeCount, visible, visibleInDirection } from "./shared";

const sampleInput = `30373
25512
65332
33549
35390`;
describe('getTreeHeights', () => {

  test('get tree heights as 2D array', () => {
    const output = getTreeHeights(sampleInput);
    const expectedOutput = [
      [3, 0, 3, 7, 3],
      [2, 5, 5, 1, 2],
      [6, 5, 3, 3, 2],
      [3, 3, 5, 4, 9],
      [3, 5, 3, 9, 0]
    ];
    expect(output).toEqual(expectedOutput);
  });
});

describe('visibleInDirection', () => {

  test('x:2, y:1 has correct visibility distances', () => {
    const treeNodes = getTreeHeights(sampleInput);
    const up = visibleInDirection(treeNodes, { x: 2, y: 1}, Direction.UP);
    const left = visibleInDirection(treeNodes, { x: 2, y: 1}, Direction.LEFT);
    const right = visibleInDirection(treeNodes, { x: 2, y: 1}, Direction.RIGHT);
    const down = visibleInDirection(treeNodes, {x: 2, y: 1}, Direction.DOWN);
    expect(up.viewingDistance).toEqual(1);
    expect(left.viewingDistance).toEqual(1);
    expect(right.viewingDistance).toEqual(2);
    expect(down.viewingDistance).toEqual(2);
  });

});

describe('visible', () => {

  test('x:1, y:2 is only visible from right', () => {
    const treeNodes = getTreeHeights(sampleInput);
    const isVisible = visible(treeNodes, { x: 1, y: 2});
    expect(isVisible).toEqual(true);
  });

  test('x:2, y:2 is not visible from any sides', () => {
    const treeNodes = getTreeHeights(sampleInput);
    const isVisible = visible(treeNodes, { x: 2, y: 2});
    expect(isVisible).toEqual(false);
  });
});

describe('getVisibleTreeCount', () => {

  test('input has 21 visible trees', () => {
    const treeNodes = getTreeHeights(sampleInput);
    const count = getVisibleTreeCount(treeNodes);
    expect(count).toBe(21);
  });

});

describe('getScenicScore', () => {
  test('x: 2, y: 1 has scenic score of 4', () => {
    const treeNodes = getTreeHeights(sampleInput);
    const highestScore = getScenicScore(treeNodes, {x: 2, y: 1});
    expect(highestScore).toBe(4);
  });
})

describe('getHighestScenicScore', () => {

  test('input has highest scenic score of 8', () => {
    const treeNodes = getTreeHeights(sampleInput);
    const highestScore = getHighestScenicScore(treeNodes);
    expect(highestScore).toBe(8);
  });

});