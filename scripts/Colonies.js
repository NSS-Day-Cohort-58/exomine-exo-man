import { getColonies, getGovernors, getMinerals, setColony } from "./database.js"
import { getTransientState } from "./database.js"
import { getColonyMinerals } from "./database.js"

const colonies = getColonies()
const governors = getGovernors()
const minerals = getMinerals()
const colonyMinerals = getColonyMinerals()


export const Colonies = () => {
    let html = ""
    const transientState = getTransientState()
    const colonyMinerals = getColonyMinerals()
    //get current transient state, check to see if the governor.colonyId in ts is equal to colony.id
    //return the headline with matching colony.name
    //if gov selected. if ts has gov, output colony name and any minerals purchased. 
    //if not, header reads colony minerals only
    if (transientState.selectedGovernor) {
        for (const governor of governors) {
            if (transientState.selectedGovernor === governor.id) {
                
                const header = colonies.map(
                    (colony) => {
                        if (governor.colonyId === colony.id) {
                        html += `<h2 class="colony_name"><br>${colony.name} Minerals</h2>`                            
                        }
                    }
                )
                html += header.join("")
            }                        
        }
    } else {
        html += `<h2 class="colony_name">Colony Minerals</h2>`
    }
    return html
}
export const colonySupply = () => {
    let mineralHTML = "<ul>"
    const transientState = getTransientState()      
            const listSupply = colonyMinerals.map(
                (supply) => {
                    if (transientState.selectedColony === supply.colonyId) {
                        for (const ore of minerals)
                            if (ore.id === supply.mineralId)
                            return `
                             <li id="mineral--${supply.mineralId}">${supply.amount} tons of ${ore.name}</li>`                                                           
                    }
                }
            )         
            mineralHTML += listSupply.join("")
            mineralHTML += "</ul>"                                                           
            return mineralHTML
}


   //iterate through governors, match TS.selectedGov === governor.id
        
        //         if (transientState.) {
        //             let listHTML = "<ul>"
        //             for (const purchase in purchases) {
        //                 for (const mineralObj of colonyMinerals)
        //                 return `<li>${purchase.mineral.amount}`
        //         }


        // html += header
        // if (purchases.mineral === true) {
        //     return `<ul>
        //         <li id="purchased_minerals>${purchases.mineral.amount} tons of ${purchases.mineral.name}`
        // }

        //         }
        //     } 
        // )
