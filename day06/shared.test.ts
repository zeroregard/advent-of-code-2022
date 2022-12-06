import { detectMarker, hasDuplicates } from "./shared";


describe('detectMarker', () => {

  test('detects marker at 5 for bvwbjplbgvbhsrlpgdmjqwftvncz', () => {
    const input = 'bvwbjplbgvbhsrlpgdmjqwftvncz';
    const output = detectMarker(input);
    expect(output).toEqual(5);
  });

  test('detects marker at 6 for nppdvjthqldpwncqszvftbrmjlhg', () => {
    const input = 'nppdvjthqldpwncqszvftbrmjlhg';
    const output = detectMarker(input);
    expect(output).toEqual(6);
  });

  test('detects marker at 10 for nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', () => {
    const input = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg';
    const output = detectMarker(input);
    expect(output).toEqual(10);
  });

  test('detects marker at 11 for zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', () => {
    const input = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';
    const output = detectMarker(input);
    expect(output).toEqual(11);
  });
});

describe('hasDuplicates', () => {
  test('finds duplicates in abca', () => {
    const input = 'abca';
    const output = hasDuplicates(input);
    expect(output).toBe(true);
  });

  test('finds no duplicates in abcd', () => {
    const input = 'abcd';
    const output = hasDuplicates(input);
    expect(output).toBe(false);
  });
})