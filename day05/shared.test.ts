import { move_9000, move_9001, toCrates } from "./shared";

describe('toCrates', () => {

  test('converts sample to matrix of crates', () => {
    const input = `    [D]    
[N] [C]    
[Z] [M] [P]
1   2   3`;
    const output = toCrates(input);
    expect(output).toEqual([['Z', 'N'], ['M', 'C', 'D'], ['P']]);
  });
});

describe('move_9000', () => {

  test('moves 3 from 2 to 1', () => {
    const input = [['Z', 'N'], ['M', 'C', 'D'], ['P']];
    const output = move_9000(input, 3, 2, 1);
    expect(output).toEqual([['Z', 'N', 'D', 'C', 'M'], [], ['P']]);
  });
});

describe('move_9001', () => {

  test('moves 3 from 2 to 1', () => {
    const input = [['Z', 'N'], ['M', 'C', 'D'], ['P']];
    const output = move_9001(input, 3, 2, 1);
    expect(output).toEqual([['Z', 'N', 'M', 'C', 'D'], [], ['P']]);
  });
});


