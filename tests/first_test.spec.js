import { test } from "@playwright/test"

test("Add item to the cart", async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com")
    await page.locator("#ui-id-4").hover()
    await page.locator("#ui-id-10").hover()
    await page.locator("#ui-id-16").click()
    await page.locator(".item product product-item").first().hover()
    // await page.locator("//img[@alt='Ina Compression Short']//li").click()
    await page.pause()
})