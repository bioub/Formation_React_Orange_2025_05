import { test, expect } from 'vitest';
import { addToArray, hello } from './hello';

test('hello function works', () => {
  // Arrange / Given
  const name = 'World';
  
  // Act / When
  const result = hello(name);

  // Assert / Then
  expect(result).toBe('Hello World');

  // Alternative way to call the function
  // expect(hello('World')).toBe('Hello World');
});

test('addToArray function works', () => {
  // Arrange / Given
  const arr = [1, 2, 3];
  const item = 4;

  // Act / When
  const result = addToArray(arr, item);

  // Assert / Then
  expect(result).toEqual([1, 2, 3, 4]);
});