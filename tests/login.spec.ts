import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test('should display login form', async ({ page }) => {
    await page.goto('/login');
    
    await expect(page.locator('h2')).toContainText('登录');
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should navigate to game after login', async ({ page }) => {
    await page.goto('/login');
    
    await page.fill('input[name="username"]', 'test-player');
    await page.click('button[type="submit"]');
    
    await expect(page).toHaveURL('/game');
  });
});
