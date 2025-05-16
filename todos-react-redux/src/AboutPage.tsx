import type { ReactNode } from 'react';
import { useParams } from 'react-router'

function AboutPage(): ReactNode {
  const { name } = useParams();

  return (
    <div>
      About Page, name: {name}
    </div>
  );
};

export default AboutPage;