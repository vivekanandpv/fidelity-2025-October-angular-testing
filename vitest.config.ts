import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: false,
    deps: {
      inline: [/@angular\//],
    },
    poolOptions: {
      threads: {
        maxThreads: 1,
      },
    },
  },
});
