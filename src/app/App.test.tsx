import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

describe('App', () => {
  it('renders the Navbar component', () => {
    render(<App />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('renders the Home section', () => {
    render(<App />);

    const heading = screen.getByRole('heading', {
      name: 'What the Sigma!?',
      level: 1,
    });

    expect(heading).toBeInTheDocument();
    expect(heading.closest('section')).toHaveAttribute('id', 'home');
  });

  it('renders the About section', () => {
    render(<App />);

    const heading = screen.getByRole('heading', {
      name: 'I am the Omgea Rizzler',
      level: 1,
    });

    expect(heading).toBeInTheDocument();
    expect(heading.closest('section')).toHaveAttribute('id', 'about');
  });

  it('renders the Projects section', () => {
    render(<App />);

    const heading = screen.getByRole('heading', {
      name: 'Bussin my dih on that gyatt!!!',
      level: 1,
    });

    expect(heading).toBeInTheDocument();
    expect(heading.closest('section')).toHaveAttribute('id', 'projects');
  });

  it('renders the Contact section', () => {
    render(<App />);

    const heading = screen.getByRole('heading', {
      name: 'Goonernation@gmail.com',
      level: 1,
    });

    expect(heading).toBeInTheDocument();
    expect(heading.closest('section')).toHaveAttribute('id', 'contact');
  });

  it('renders all main sections', () => {
    render(<App />);

    const sections = ['home', 'about', 'projects', 'contact'];

    sections.forEach((id) => {
      const section = document.querySelector(`section#${id}`);
      expect(section).toBeInTheDocument();
    });
  });
});
