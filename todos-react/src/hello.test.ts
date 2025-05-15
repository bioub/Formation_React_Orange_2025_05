import { test, expect } from 'vitest';
import { hello } from './hello';

test('hello function works', () => {
  expect(hello('World')).toBe('Hello World');
});