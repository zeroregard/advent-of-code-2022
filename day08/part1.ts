import { getForestInput, getTreeHeights, getVisibleTreeCount } from "./shared";

const forest = getForestInput();
const treeNodes = getTreeHeights(forest);
const count = getVisibleTreeCount(treeNodes);

console.log(count);