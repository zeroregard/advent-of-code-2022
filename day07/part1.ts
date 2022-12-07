import { Directory } from "./models";
import { getAllNestedChildren, getCommands, getTerminalOutput, handleCommand, setDirectorySize } from "./shared";

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
  const allDirs = getAllNestedChildren(rootDir)
  const smallDirSum = allDirs
    .filter(dir => dir.dirSize < 100000)
    .map(dir => dir.dirSize)
    .reduce((a, b) => a + b, 0);
  console.log(smallDirSum);
}

