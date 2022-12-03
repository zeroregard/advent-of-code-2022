import { getCommonItem, getItemPriority, getRucksacks, toCompartments } from "./shared";

const rucksacks = getRucksacks();
const compartmentTouples = toCompartments(rucksacks);
const uniqueItems = compartmentTouples.map(ct => getCommonItem(ct));
const itemPriorities = uniqueItems.map(item => getItemPriority(item));
const sum = itemPriorities.reduce((a, b) => a + b, 0);
console.log(sum);