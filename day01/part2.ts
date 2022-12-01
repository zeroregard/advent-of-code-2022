import { getTotalCaloriesPerElf } from "./shared";

const totalCaloriesPerElf = getTotalCaloriesPerElf();
const elvesSorted = totalCaloriesPerElf.sort((a,b) => b - a);
const topThreeCombined = elvesSorted.slice(0, 3).reduce((a, b) => a + b, 0);
console.log(topThreeCombined);