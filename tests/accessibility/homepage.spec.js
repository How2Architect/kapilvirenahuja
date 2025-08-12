// @ts-check
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test.describe('Homepage Accessibility', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should have proper heading structure', async ({ page }) => {
    await page.goto('/');
    
    // Check that there's exactly one h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // Check that h1 has content
    const h1Text = await page.locator('h1').textContent();
    expect(h1Text).toBeTruthy();
    expect(h1Text.trim().length).toBeGreaterThan(0);
  });

  test('should have proper meta tags for SEO', async ({ page }) => {
    await page.goto('/');
    
    // Check title exists and has content
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
    
    // Check meta description exists
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toBeTruthy();
    expect(metaDescription.length).toBeGreaterThan(50); // Minimum recommended length
    
    // Check viewport meta tag
    const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(viewport).toContain('width=device-width');
  });

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['color-contrast'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/');
    
    // Test that Tab key works for navigation
    await page.keyboard.press('Tab');
    
    // Check that focus is visible
    const focusedElement = await page.locator(':focus');
    expect(await focusedElement.count()).toBeGreaterThan(0);
  });

  test('should have proper ARIA attributes', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .withRules(['aria-valid-attr', 'aria-allowed-attr', 'aria-required-attr'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should have alt text for images', async ({ page }) => {
    await page.goto('/');
    
    const images = await page.locator('img').all();
    
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      const ariaLabel = await img.getAttribute('aria-label');
      const ariaLabelledby = await img.getAttribute('aria-labelledby');
      const role = await img.getAttribute('role');
      
      // Image should have alt text, aria-label, aria-labelledby, or be decorative
      expect(
        alt !== null || 
        ariaLabel !== null || 
        ariaLabelledby !== null || 
        role === 'presentation' || 
        alt === ''
      ).toBeTruthy();
    }
  });
});