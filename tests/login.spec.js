import { test } from "@playwright/test"
import { HomePage } from "../pages/HomePage"
import { SignInPage } from "../pages/SignInPage"

test.only("Test user log in", async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.visit()
    await homePage.panel.goToSignIn()
    const signInPage = new SignInPage(page)
    await signInPage.provideEmail('roni_cost@example.com')
    await signInPage.providePassword('roni_cost3@example.com')
    await signInPage.submitSignIn()
    await page.pause()
})