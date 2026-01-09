import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('should render the app correctly', () => {
    render(<App />)

    // Check if Vite logo is in the document
    expect(screen.getByAltText(/Vite logo/i)).toBeInTheDocument()

    // Check if React logo is in the document
    expect(screen.getByAltText(/React logo/i)).toBeInTheDocument()

    // Check if the initial count is rendered correctly
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument()
  })

  it('should increment count when the button is clicked', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(button)
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument()
  })

  it('should render links correctly', () => {
    render(<App />)

    // Check if the Vite link is present and has the correct href
    const viteLink = screen.getByRole('link', { name: /Vite website/i })
    expect(viteLink).toHaveAttribute('href', 'https://vite.dev')
    expect(viteLink).toHaveAttribute('target', '_blank')

    // Check if the React link is present and has the correct href
    const reactLink = screen.getByRole('link', { name: /React website/i })
    expect(reactLink).toHaveAttribute('href', 'https://react.dev')
    expect(reactLink).toHaveAttribute('target', '_blank')
  })

  it('should render the instruction to edit src/App.tsx', () => {
    render(<App />)

    // Check if the <code> element is present
    const codeElement = screen.getByText('src/App.tsx')
    expect(codeElement).toBeInTheDocument()

    // Also check for the rest of the instruction text
    const instruction = screen.getByText(/Edit.*and save to test HMR/)
    expect(instruction).toBeInTheDocument()
  })
})
