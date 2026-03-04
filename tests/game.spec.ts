import { test, expect } from '@playwright/test';

test.describe('Game Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="username"]', 'test-player');
    await page.click('button[type="submit"]');
  });

  test('should display game board', async ({ page }) => {
    await expect(page.locator('.game-board')).toBeVisible();
    await expect(page.locator('.score')).toContainText('0');
  });

  test('should start game on button click', async ({ page }) => {
    await page.click('button:has-text("开始游戏")');
    await expect(page.locator('.game-status')).toContainText('游戏中');
  });
});
