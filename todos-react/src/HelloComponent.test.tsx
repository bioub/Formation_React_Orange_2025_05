import { expect, test } from "vitest";
import { render, screen } from '@testing-library/react';

import HelloComponent from "./HelloComponent";

test('HelloComponent works', () => {
  render(<HelloComponent name="World" />);
  expect(screen.queryByText('Hello World')).toBeInTheDocument();
});


// Sans Testing Library
// assez verbeux
// la fonction act, permet d'attendre que le DOM soit mis à jour avant de faire une assertion (expect)


// import { createRoot } from "react-dom/client";
// import { act } from 'react';
// import { expect, test } from "vitest";
// import HelloComponent from "./HelloComponent";

// test('HelloComponent works', () => {
//   const rootEl = document.createElement('div');
//   document.body.appendChild(rootEl);

//   act(() => {
//     createRoot(rootEl).render(
//       <HelloComponent name="World" />
//     );
//   });

//   expect(rootEl.textContent).toBe('Hello World');
//   rootEl.remove();
// });