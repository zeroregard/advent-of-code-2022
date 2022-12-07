export interface FileType {
  name: string;
  size: number;
  extension?: string;
}

const ROOT_DIR = '/';

export enum CommandType {
  CD = 'cd',
  LS = 'ls'
};

export interface Command<T> {
  type: CommandType;
  output: T;
}


export interface Directory {
  name: string;
  subdirs: Directory[];
  files: FileType[];
  parentDir?: Directory;
  dirSize: number;
}

export interface LsCmdOutput {
  arg0: string;
  arg1: string;
}

export interface CdCmdOutput {
  target: string;
}