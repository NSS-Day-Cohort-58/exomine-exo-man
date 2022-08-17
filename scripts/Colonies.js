import { getColonies } from "./database.js"
import { getTransientState } from "./database.js"

const colonies = getColonies()


export const Colonies = () => {
    let html = ""
    const transientState = getTransientState()
    //get current transient state, check to see if the governor.colonyId in ts is equal to colony.id
    //return the headline with matching colony.name
    //if gov selected. if ts has gov, output colony name and any minerals purchased. 
    //if not, header reads colony minerals only
    const header = colonies.map(
        (colony) => {
            if (transientState.governor.colonyId === colony.id) {
                return `<h2 class="colony">${colony.name} Minerals</h2>` 
            } 
            if (purchases.mineral === true) {
                return `<`
            }

            
        }
    )
    html += header
    return html
    
}

