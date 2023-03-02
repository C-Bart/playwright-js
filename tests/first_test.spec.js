import { test } from "@playwright/test"

test("Add item to the cart", async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com")
    await page.locator("#ui-id-4").hover()
    await page.locator("#ui-id-10").hover()
    await page.locator("#ui-id-16").click()
    const product = page.locator("//img[@alt='Ina Compression Short']//li")
    await product.hover()
    await page.pause()
})