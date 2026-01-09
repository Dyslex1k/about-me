import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders the navigation landmark', () => {
    render(<Navbar />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('renders the site title link', () => {
    render(<Navbar />);

    const titleLink = screen.getByRole('link', { name: 'Dyslex1k' });

    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toHaveAttribute('href', '#home');
  });

  it('renders all navigation links', () => {
    render(<Navbar />);

    const links = [
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ];

    links.forEach(({ name, href }) => {
      const link = screen.getByRole('link', { name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });
  });

  it('renders the correct total number of links', () => {
    render(<Navbar />);

    const allLinks = screen.getAllByRole('link');
    expect(allLinks).toHaveLength(4); // title + 3 nav links
  });

  it('applies layout-related classes to the nav container', () => {
    render(<Navbar />);

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('fixed', 'w-full');
  });
});
