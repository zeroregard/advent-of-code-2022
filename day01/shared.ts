import * as fs from 'fs';

export function getTotalCaloriesPerElf() {
  const allElfSchedules = fs.readFileSync('day01/input.txt','utf8');
  const splitElfSchedules = allElfSchedules.split(/\n\s*\n/);
  return splitElfSchedules
    .map(schedule => schedule.split(/\r?\n/).reduce((a, b) => a + parseInt(b), 0))
    .filter(x => !isNaN(x));
}