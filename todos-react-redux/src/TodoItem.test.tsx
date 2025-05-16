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

// Exercice 1 :
// Vérifier que TodoItem affiche bien le titre
test('TodoItem displays the title', () => {
  const todo = {
    id: 123,
    title: 'Test Todo',
    completed: false,
  };

  render(<TodoItem todo={todo} />);

  const titleElement = screen.queryByText('Test Todo');

  expect(titleElement).toBeInTheDocument();
});

// Exercice 2 :
// Vérifier qu'au double-click sur le titre onToggleEdit est bien appelé
// avec l'id de la todo
test('TodoItem calls onToggleEdit on double click', () => {
  const todo = {
    id: 123,
    title: 'Test Todo',
    completed: false,
  };

  const handleToggleEdit = vi.fn();

  render(<TodoItem todo={todo} onToggleEdit={handleToggleEdit} />);

  const titleElement = screen.getByText('Test Todo');

  fireEvent.dblClick(titleElement);

  expect(handleToggleEdit).toHaveBeenCalledTimes(1);
  expect(handleToggleEdit).toHaveBeenCalledWith(123);
});

// Bonus :
// Vérifier que si isEditing vaut true c'est un champ qui s'affiche
// Vérifier qu'à la saisie dans le champ onEdit est bien appelé
// avec la todo mis à jour (title modifié)
// Indice : utiliser getByRole('textbox') pour récupérer le champ
test('TodoItem displays input when isEditing is true', () => {
  const todo = {
    id: 123,
    title: 'Test Todo',
    completed: false,
  };

  const handleEdit = vi.fn();

  render(<TodoItem todo={todo} isEditing={true} onEdit={handleEdit} />);

  const inputElement = screen.getByRole('textbox');

  fireEvent.change(inputElement, { target: { value: 'Updated Todo' } });

  expect(handleEdit).toHaveBeenCalledTimes(1);
  expect(handleEdit).toHaveBeenCalledWith({ ...todo, title: 'Updated Todo' });
});