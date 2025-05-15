import type { ReactNode } from 'react';

type Props = {
  readonly name: string;
}

function HelloComponent({ name }: Props): ReactNode {
  return (
    <div>
      Hello {name}
    </div>
  );
};

export default HelloComponent;