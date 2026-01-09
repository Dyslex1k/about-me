import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { NavLink } from './NavLink';

describe('NavLink', () => {
  it('renders the link with the provided name', () => {
    render(<NavLink name="Home" href="/" />);

    const link = screen.getByRole('link', { name: 'Home' });
    expect(link).toBeInTheDocument();
  });

  it('sets the correct href attribute', () => {
    render(<NavLink name="About" href="/about" />);

    const link = screen.getByRole('link', { name: 'About' });
    expect(link).toHaveAttribute('href', '/about');
  });

  it('applies the expected Tailwind classes', () => {
    render(<NavLink name="Contact" href="/contact" />);

    const link = screen.getByRole('link', { name: 'Contact' });

    expect(link).toHaveClass(
      'transition-all',
      'duration-300',
      'ease-in-out',
      'inline-block',
      'hover:text-orange-500',
      'hover:scale-125',
      'hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]'
    );
  });

  it('renders the correct accessible role', () => {
    render(<NavLink name="Blog" href="/blog" />);

    expect(screen.getByRole('link')).toBeVisible();
  });
});
