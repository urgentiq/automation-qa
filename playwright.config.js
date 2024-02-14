// @ts-nocheck
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  // timeout: 8000, // 2 minutes timeout
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Google Chrome',
      use: { 
        ...devices['Desktop Chrome'], 
        channel: 'chrome',
        viewport: { width: 1500, height: 730 },
        // viewport: { width: 2560, height: 1600 }, // Specify a specific viewport size
        browserContextOptions: {
          fullscreen: true,
        },
        screenshot: 'on',
        video: 'on',
        trace: 'on'
      }
    },
  ],
});
