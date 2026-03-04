import { test, expect } from '@playwright/test';

test.describe('Leaderboard Page', () => {
  test('should display leaderboard', async ({ page }) => {
    await page.goto('/leaderboard');
    
    await expect(page.locator('h2')).toContainText('排行榜');
    await expect(page.locator('table')).toBeVisible();
  });

  test('should show top players', async ({ page }) => {
    await page.goto('/leaderboard');
    
    const rows = await page.locator('tbody tr').count();
    expect(rows).toBeGreaterThan(0);
  });

  test('should navigate back to game', async ({ page }) => {
    await page.goto('/leaderboard');
    await page.click('button:has-text("返回游戏")');
    
    // Should redirect to login if not authenticated
    await expect(page).toHaveURL('/login');
  });
});
