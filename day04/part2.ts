import { areaOverlapsOther, getAssignmentPairs } from "./shared";

const pairs = getAssignmentPairs();
const fullyCoveredPairs = pairs.filter(pair => areaOverlapsOther(pair.areaA, pair.areaB));
console.log(fullyCoveredPairs.length);