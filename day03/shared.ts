import * as fs from 'fs';
import { EMPTY_LINE, NEW_LINE } from '../util';

export function getRucksacks(): string[] {
  return fs.readFileSync('day03/input.txt','utf8').split(NEW_LINE);
}

export function groupRucksacks(rucksacks: string[], groupSize = 3): string[][] {
  let groups: string[][] = [];
  for (let i = 0; i < rucksacks.length; i+=3) {
    groups.push([rucksacks[i], rucksacks[i+1], rucksacks[i+2]]);
  }
  return groups;
}

export function toCompartments(rucksacks: string[]): string[][] {
  return rucksacks.map(rucksack => splitStringInHalf(rucksack));
}

export function splitStringInHalf(input: string): string[] {
  const first = input.slice(0, input.length/2);
  const second = input.slice(input.length/2, input.length);
  return [first, second];
}

export function getUniques(compartment: string): string {
  const uniques = new Set<string>();
  for (var i = 0; i < compartment.length; i++) {
    uniques.add(compartment[i]);
  }
  return Array.from(uniques.values()).reduce((a, b) => a + b, '');
}

export function getItemPriority(item: string) {
  const charCode = item.charCodeAt(0);
  if(item === item.toUpperCase()) {
    return charCode - 65 + 27; // ascii value for 'A' is 65, priority is 27
  } else {
    return charCode - 97 + 1; // ascii value for 'a' is 97, priority is 1;
  }
}

export function getCommonItem(inventories: string[]): string {
  const items = new Map<string, number>();
  inventories.forEach(inventory => {
    const compartmentUniques = getUniques(inventory);
    for (var i = 0; i < compartmentUniques.length; i++) {
      const item = compartmentUniques[i];
      items.set(item, (items.get(item) ?? 0) + 1);
    }
  });
  const commonItem = Array.from(items.entries()).find(a => a[1] === inventories.length);
  return commonItem?.[0] ?? '';
}