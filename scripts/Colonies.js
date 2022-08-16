import { getColonies } from "./database.js"

const colonies = getColonies()

export const Colonies = (governor) => {
    let html = ""

    const header = colonies.map(
        (colony) => {
            if (governor.colonyId === colony.id) {
                return `<h2 class="colony">${colony.name} Minerals</h2>`
            }
        }
    )
    html += header
    return html
    
}

