import { render, screen, fireEvent } from '@testing-library/react';
import ExampleButton from '../ExampleButton';

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<ExampleButton label="Test" onClick={handleClick} />);
  fireEvent.click(screen.getByText('Test'));
  expect(handleClick).toHaveBeenCalled();
});
