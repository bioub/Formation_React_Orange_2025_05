import type { ReactNode } from 'react';
type Props = {
  readonly title: string
}

function TodoInputValue({ title }: Props): ReactNode {
  return (
    <input className="todosInputValue" value={title} />
  );
};

export default TodoInputValue;