import { getCommonItem, getItemPriority, getRucksacks, groupRucksacks } from "./shared";

const rucksacks = getRucksacks();
const groups = groupRucksacks(rucksacks);
const badges = groups.map(groupInventories => getCommonItem(groupInventories));
const itemPriorities = badges.map(item => getItemPriority(item));
const sum = itemPriorities.reduce((a, b) => a + b, 0);

console.log(sum);