import { dir } from "console";
import { Directory } from "./models";
import { findSmallestDirToFreeSpace, getCommands, getTerminalOutput, handleCommand, setDirectorySize } from "./shared";

const output = getTerminalOutput();
const commands = getCommands(output);
let directory: Directory | undefined;
let rootDir: Directory | undefined;
commands.forEach(command => {
  directory = handleCommand(command, directory);
  if(rootDir === undefined) {
    rootDir = directory;
  }
});

if(rootDir) {
  setDirectorySize(rootDir);
  const TOTAL_SPACE = 70000000;
  const NEEDED_UNUSED = 30000000;
  let smallestDir = findSmallestDirToFreeSpace(rootDir, TOTAL_SPACE, NEEDED_UNUSED);
  console.log(smallestDir?.dirSize);
}

