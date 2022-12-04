import { areaFullyContainsOther, areaOverlapsOther, getFullArea } from "./shared";

describe('getFullArea', () => {

  test('converts 6-6 to 6', () => {
    const input = '6-6';
    const output = getFullArea(input);
    expect(output).toEqual([6]);
  });

  test('converts 1-2 to -1-2-', () => {
    const input = '1-2';
    const output = getFullArea(input);
    expect(output).toEqual([1,2]);
  });

  test('converts 1-3 to -1-2-3-', () => {
    const input = '1-3';
    const output = getFullArea(input);
    expect(output).toEqual([1,2,3]);
  });
});

describe('areaFullyContainsOther', () => {

  test('-1-2-3- includes -2-', () => {
    const areaA = [1,2,3];
    const areaB = [2];
    expect(areaFullyContainsOther(areaA, areaB)).toBe(true);
    expect(areaFullyContainsOther(areaB, areaA)).toBe(true);
  });

  test('-6-7-8- does not include -1-2-3-', () => {
    const areaA = [1,2,3];
    const areaB = [6,7,8];
    expect(areaFullyContainsOther(areaA, areaB)).toBe(false);
    expect(areaFullyContainsOther(areaB, areaA)).toBe(false);
  });
});

describe('areaFullyContainsOther', () => {

  test('-1-2-3- overlaps with -3-4-5-', () => {
    const areaA = [1,2,3];
    const areaB = [3,4,5];
    expect(areaOverlapsOther(areaA, areaB)).toBe(true);
    expect(areaOverlapsOther(areaB, areaA)).toBe(true);
  });

  test('-6-7-8- does not overlap with -1-2-3-', () => {
    const areaA = [1,2,3];
    const areaB = [6,7,8];
    expect(areaOverlapsOther(areaA, areaB)).toBe(false);
    expect(areaOverlapsOther(areaB, areaA)).toBe(false);
  });
});