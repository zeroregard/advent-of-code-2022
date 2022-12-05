import { getSupplyStackInput, getTopOfStacks, move_9001 } from "./shared";

const supplyStack = getSupplyStackInput();
supplyStack.instructions.forEach(instruction => {
  move_9001(supplyStack.crates, instruction.count, instruction.from, instruction.to);
});
const topOfStacks = getTopOfStacks(supplyStack.crates);
console.log(topOfStacks.reduce((a, b) => a+b, ''));