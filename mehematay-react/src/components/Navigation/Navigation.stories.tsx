import React from 'react';

import Navigation from './Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
  tags: ['autodocs'],
  decorators: [
    (story: () => React.ReactNode) => (
      <div style={{ height: '1500px' }}>
        <h1>Scroll Down</h1>
        {story()}
      </div>
    )
  ]
};
const navigationLinks = [
  { title: 'בית', to: '#' },
  { title: 'זמני היום', to: '#' },
  { title: 'תפילה קרובה', to: '#' },
  { title: 'אודות', to: '#' }
];
export const fullscreenNavigation = (): JSX.Element => {

  return <Navigation navigationLinks={navigationLinks} />;
};
