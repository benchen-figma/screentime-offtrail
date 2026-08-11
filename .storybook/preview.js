import { createElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story) =>
      createElement(MemoryRouter, { initialEntries: ['/'] }, createElement(Story)),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: { test: "todo" }
  },
};

export default preview;
