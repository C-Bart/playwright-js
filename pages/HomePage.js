import { Panel } from "../components/Panel.js"

export class HomePage {
    
    constructor(page) {
        this.page = page
        this.panel = new Panel(page)
    }

    visit = async () => {
        await this.page.goto("/")
    }

}