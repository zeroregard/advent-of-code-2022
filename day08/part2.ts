import { getForestInput, getHighestScenicScore, getTreeHeights } from "./shared";

const forest = getForestInput();
const treeNodes = getTreeHeights(forest);
const score = getHighestScenicScore(treeNodes);

console.log(score);