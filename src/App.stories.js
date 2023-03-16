// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories

import React from 'react';
import { action } from '@storybook/addon-actions';
import  App  from './App';

export default {
  title: 'Components/App',
  component: App,
};

export const Default = () => (
  <App />
);

export const WithButton = () => (
  <App
    buttonText="Click me"
    onClick={action('Button clicked')}
  />
);