import { getCommonItem, getItemPriority, getUniques, splitStringInHalf } from "./shared";

describe('splitStringInHalf', () => {
  test('splits string in half', () => {
    const input = 'vJrwpWtwJgWrhcsFMMfFFhFp';
    const output = splitStringInHalf(input);
    expect(output[0]).toBe('vJrwpWtwJgWr');
    expect(output[1]).toBe('hcsFMMfFFhFp')
  });
});

describe('getUniques', () => {
  test('gets unique items abc from aaabbbccc', () => {
    const compartment = 'aaabbbccc';
    const uniques = getUniques(compartment);
    expect(uniques).toBe('abc');
  });

  test('gets unique items vJrwpWtg from vJrwpWtwJgWr', () => {
    const compartment = 'vJrwpWtwJgWr';
    const uniques = getUniques(compartment);
    expect(uniques).toBe('vJrwpWtg');
  });
});


describe('getCommonItem', () => {
  test('gets common item from two inventories', () => {
    const compartments = ['vJrwpWtwJgWr', 'hcsFMMfFFhFp'];
    const commonItem = getCommonItem(compartments);
    expect(commonItem).toBe('p');
  });

  test('gets common item from three inventories', () => {
    const inventories = [
      'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
      'ttgJtRGJQctTZtZT',
      'CrZsJsPPZsGzwwsLwLmpwMDw'
    ];
    const commonItem = getCommonItem(inventories);
    expect(commonItem).toBe('Z');
  })
});

describe('getItemPriority', () => {
  test('gets item priority correctly', () => {
    expect(getItemPriority('a')).toBe(1);
    expect(getItemPriority('z')).toBe(26);
    expect(getItemPriority('A')).toBe(27);
    expect(getItemPriority('Z')).toBe(52);
  });
});