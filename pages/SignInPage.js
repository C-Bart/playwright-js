export class SignInPage {

    constructor(page) {
        this.page = page

        this.inputEmail = page.locator('[id="email"]')
        this.inputPassword = page.locator('[id="pass"]')
        this.buttonSignIn = page.locator('[id="send2"]')
    }

    provideEmail = async (email) => {
        await this.inputEmail.fill(email)
    }

    providePassword = async (password) => {
        await this.inputPassword.fill(password)
    }

    submitSignIn = async () => {
        await this.buttonSignIn.click()
    }

}