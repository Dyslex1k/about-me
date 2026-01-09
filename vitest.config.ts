import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true, // Automatically provides globals like expect
    environment: 'jsdom', // Set the environment to jsdom (for DOM testing)
    setupFiles: ['./src/setupTests.ts'], // Optional: for setup files like jest-dom matchers
  },
})
