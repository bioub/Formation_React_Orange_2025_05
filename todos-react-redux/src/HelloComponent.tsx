import type { ReactNode } from 'react';

type Props = {
  readonly name: string;
}

function HelloComponent({ name }: Props): ReactNode {
  return (
    <div data-testid="hello-component">
      Hello {name}
    </div>
  );
};

export default HelloComponent;