import { render, screen } from '@testing-library/react';
import App from './App';

test('renders change color', () => {
  render(<App iconList={[]} />);
  const linkElement = screen.getByText(/change color/i);
  expect(linkElement).toBeInTheDocument();
});
