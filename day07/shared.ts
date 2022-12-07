import * as fs from 'fs';
import { NEW_LINE } from '../util';
import { CdCmdOutput, Command, CommandType, Directory, FileType, LsCmdOutput } from './models';

export function getTerminalOutput() {
  return fs.readFileSync('day07/input.txt','utf8');
}

export function getCommands(output: string): Command<any>[] {
  return output
    .split('$')
    .filter(x => x)
    .map(command => command.split(NEW_LINE))
    .map(args => getCommand(args));
}

export function getCommand(cmdArgs: string[]): Command<any> {
  const firstCmdArgsTrimmed = cmdArgs[0].trim();
  const type = firstCmdArgsTrimmed.split(' ')[0] as CommandType;
  switch(type) {
    case CommandType.CD: 
      const cdOutput = {
        target: firstCmdArgsTrimmed.split(' ')[1]
      };
      return { type: CommandType.CD, output: cdOutput } as Command<CdCmdOutput>;
    case CommandType.LS:
    default:
      const lsOutput = cmdArgs.slice(1).map(output => {
        const args = output.split(' ');
        return {
          arg0: args[0],
          arg1: args[1]
        } as LsCmdOutput;
      }).filter(args => !!args.arg0);
      return { type: CommandType.LS, output: lsOutput } as Command<LsCmdOutput[]>;
  }
}

export function handleCommand(cmd: Command<any>, pwd?: Directory): Directory | undefined {
  switch(cmd.type){
    case CommandType.CD:
      return changeDirectory(cmd, pwd);
    case CommandType.LS:
      if(pwd) {
        return constructDirectoryFromLsCommand(cmd, pwd);
      }
      break;
  }
}

export function constructDirectoryFromLsCommand(cmd: Command<LsCmdOutput[]>, pwd: Directory): Directory {
  cmd.output.forEach(outputArgs => {
    const isFileCreation = outputArgs.arg0.match(/^[0-9]*$/)
    if(isFileCreation) {
      const size = parseInt(outputArgs.arg0);
      const subArgs = outputArgs.arg1.split(' ');
      const name = subArgs[0];
      const extension = subArgs[1];
      const file: FileType = {
        name,
        size,
        extension      
      }
      pwd.files.push(file);
    } else {
      const directory: Directory = createDirectory(outputArgs.arg1, pwd);
      pwd.subdirs.push(directory);
    }
  });
  return pwd;
}

export function setDirectorySize(directory: Directory): number {
  const sizes = [
    ...directory.files.map(f => f.size),
    ...directory.subdirs.map(d => setDirectorySize(d))];
  const sum = sizes.reduce((a, b) => a + b, 0);
  directory.dirSize = sum;
  return sum;
}


export function createDirectory(name: string, pwd?: Directory): Directory {
 return {
    name,
    subdirs: [],
    files: [],
    parentDir: pwd,
    dirSize: 0
  }
}

export function changeDirectory(cmd: Command<CdCmdOutput>, pwd?: Directory): Directory | undefined {
  //console.log(`changing directory to ${cmd.output.target}`);
  if(!pwd) {
    return createDirectory(cmd.output.target);
  }
  switch(cmd.output.target) {
    case '..':
      return pwd.parentDir;
    default:
      return pwd.subdirs.find(x => x.name === cmd.output.target);
  }
}

export function getAllNestedChildren(pwd: Directory): Directory[] {
  return [pwd, ...pwd.subdirs.flatMap(dir => getAllNestedChildren(dir))];
}

export function getFoldersBelowSize(directories: Directory[], max: number) {
  return directories.filter(dir => dir.dirSize < 100000);
}

export function findSmallestDirToFreeSpace(rootDir: Directory, totalSpace: number, neededUnused: number) {
  let sorted = getAllNestedChildren(rootDir)
    .sort((a, b) => a.dirSize > b.dirSize ? -1 : 1);
  while(sorted.length) {
    const dirToDelete = sorted.pop();
    const rootDirCalcSize = (rootDir.dirSize) - (dirToDelete?.dirSize ?? 0);
    const ponentialUnused = totalSpace - rootDirCalcSize;
    if(ponentialUnused >= neededUnused) {
      return dirToDelete;
    }
  }
  throw new Error('Found no dir big enough');
}