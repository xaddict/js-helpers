// @vitest-environment happy-dom

import { DeviceSupportsSelectSize } from './DeviceSupportsSelectSize.js';
import { test, expect } from 'vitest';

test('DeviceSupportsSelectSize', () => {
  const test = DeviceSupportsSelectSize();
  expect(test).toBe(false);
  expect(test).toBeTypeOf('boolean');
});
