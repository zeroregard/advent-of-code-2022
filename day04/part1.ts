import { areaFullyContainsOther, getAssignmentPairs } from "./shared";

const pairs = getAssignmentPairs();
const fullyCoveredPairs = pairs.filter(pair => areaFullyContainsOther(pair.areaA, pair.areaB));
console.log(fullyCoveredPairs.length);