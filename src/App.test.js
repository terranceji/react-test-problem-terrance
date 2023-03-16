// import your story from App.stories.js
import { render, screen, fireEvent } from '@testing-library/react';
import { WithButton } from './App.stories';


// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

describe('App component', () => {
  it('should render a button', () => {
    render(<WithButton />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('should change button text on click', () => {
    render(<WithButton />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('Thanks!');
  });
});