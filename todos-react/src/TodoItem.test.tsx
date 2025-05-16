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

// Exercice 1 :
// Vérifier que TodoItem affiche bien le titre

// Exercice 2 :
// Vérifier qu'au double-click sur le titre onToggleEdit est bien appelé
// avec l'id de la todo

// Bonus :
// Vérifier que si isEditing vaut true c'est un champ qui s'affiche
// Vérifier qu'à la saisie dans le champ onEdit est bien appelé
// avec la todo mis à jour (title modifié)
// Indice : utiliser getByRole('textbox') pour récupérer le champ
// Indice : utiliser @testing-library/user-event pour simuler la saisie