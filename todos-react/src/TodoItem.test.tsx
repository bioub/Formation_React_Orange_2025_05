import '@testing-library/jest-dom/vitest';
import { expect, test, vi } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';

import TodoItem from "./TodoItem";

test('TodoItem can be deleted', () => {
  const todo = {
    id: 123,
    title: 'Test Todo',
    completed: false,
  };

  const handleDelete = vi.fn();

  render(<TodoItem todo={todo} onDelete={handleDelete} />);

  const deleteButton = screen.getByRole('button', { name: '-' });

  fireEvent.click(deleteButton);

  expect(handleDelete).toHaveBeenCalledTimes(1);
  expect(handleDelete).toHaveBeenCalledWith(123);
});
