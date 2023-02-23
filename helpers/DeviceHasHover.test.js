// @vitest-environment happy-dom

import { DeviceHasHover } from './DeviceHasHover.js';
import { test, expect, vi } from 'vitest';

test('deviceHasHover does not match', () => {
  const test = DeviceHasHover();
  expect(test).toBe(false);
  expect(test).toBeTypeOf('boolean');
});

test('deviceHasHover matches', () => {
  Object.defineProperty(window, 'matchMedia', {
    value: vi.fn().mockImplementation(() => ({
      matches: true,
    })),
  });

  const test = DeviceHasHover();
  expect(test).toBe(true);
  expect(test).toBeTypeOf('boolean');
});
