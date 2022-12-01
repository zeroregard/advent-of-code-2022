import { getTotalCaloriesPerElf } from "./shared";

const totalCaloriesPerElf = getTotalCaloriesPerElf();
const mostCalories = Math.max(...totalCaloriesPerElf);
console.log(mostCalories);