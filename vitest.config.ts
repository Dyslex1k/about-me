import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,

    coverage: {
      provider: 'v8', // required for @vitest/coverage-v8
      reporter: ['text', 'html', 'json'],
      reportsDirectory: './coverage',

      // what files to include in coverage
      include: ['src/**/*.{ts,tsx}'],

      // what files to exclude
      exclude: [
        'node_modules/',
        'src/main.tsx',
        'src/vite-env.d.ts',
        '**/*.test.{ts,tsx}',
      ],

      // optional thresholds
      thresholds: {
        statements: 80,
        branches: 70,
        functions: 80,
        lines: 80,
      },
    },
  },
});
