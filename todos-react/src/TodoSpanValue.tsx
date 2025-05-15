import type { ReactNode } from "react";

type Props = {
  readonly title: string
}

function TodoSpanValue({ title }: Props): ReactNode {
  return (
    <span className="todosSpanValue">
      {title}
    </span>
  );
};

export default TodoSpanValue;