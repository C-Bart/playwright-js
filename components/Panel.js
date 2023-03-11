export class Panel {

    constructor(page) {
        this.page = page

        this.panel = page.locator('[class="panel wrapper"]')
        
        this.button_sign_in = this.panel.locator('[class="authorization-link"] a')
    }

    goToSignIn = async () => {
        await this.button_sign_in.click()
    }

}