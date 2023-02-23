import { expect, test } from 'vitest';
import numberBetween from './numberBetween.js';

let min = -100;
let max = 100;

test('numberBetween', () => {
  // test it a thousand times
  let tests = Array.from({ length: 1000 }, () => numberBetween(min, max));
  tests.forEach((number) => {
    expect(number).toBeTypeOf('number');
    expect(number).toBeGreaterThanOrEqual(min);
    expect(number).toBeLessThanOrEqual(max);
  });
});

test('numberBetween nulls', () => {
  expect(() => numberBetween(null, null)).toThrowError();
});

test('numberBetween one null', () => {
  expect(() => numberBetween(null, 100)).toThrowError();
  expect(() => numberBetween(100, null)).toThrowError();
});

test('numberBetween swapped values', () => {
  expect(() => numberBetween(100, 0)).toThrowError();
});

test('numberBetween empty', () => {
  expect(() => numberBetween()).toThrowError();
  expect(() => numberBetween()).toThrowError();
});

test('numberBetween undefined', () => {
  expect(() => numberBetween(undefined)).toThrowError();
  expect(() => numberBetween(0, undefined)).toThrowError();
});
