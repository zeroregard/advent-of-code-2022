import * as fs from 'fs';
import { EMPTY_LINE, NEW_LINE } from '../util';

export function getTotalCaloriesPerElf() {
  const allElfSchedules = fs.readFileSync('day01/input.txt','utf8');
  const splitElfSchedules = allElfSchedules.split(EMPTY_LINE);
  return splitElfSchedules
    .map(schedule => schedule.split(NEW_LINE).reduce((a, b) => a + parseInt(b), 0))
    .filter(x => !isNaN(x));
}