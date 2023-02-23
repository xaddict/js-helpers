import { SizedArray } from './SizedArray.js';
import { test, expect } from 'vitest';

let size = 100;
test('sizedArray', () => {
  let array = sizedArray(size);
  expect(array).toHaveLength(size);
  expect(array).toHaveProperty(size / 2);
  expect(array).toBeTypeOf('object');
  expect(array).toBeInstanceOf(Array);
});

test('sizedArray empty', () => {
  let array = sizedArray();
  expect(array).toHaveLength(0);
  expect(array).toBeTypeOf('object');
  expect(array).toBeInstanceOf(Array);
});

test('sizedArray fill', () => {
  let array = sizedArray(size, 'A');
  expect(array).toHaveLength(size);
  expect(array).toHaveProperty(size / 2, 'A');
  expect(array).toBeTypeOf('object');
  expect(array).toBeInstanceOf(Array);
});
