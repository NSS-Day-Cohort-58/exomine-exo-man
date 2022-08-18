import { getColonies, getGovernors, getMinerals } from "./database.js"
import { getTransientState } from "./database.js"
import { getColonyMinerals } from "./database.js"
const colonies = getColonies()
const governors = getGovernors()
const minerals = getMinerals()


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
                        html += `<h2 class="colony_name">${colony.name} Minerals</h2>`
                            if (transientState.selectedMineral) {
                                let mineralHTML = "<ul>"
                                for (const mineral of minerals) {
                                    if (transientState.selectedMineral === mineral.id) {
                                        for (const colonyMineral of colonyMinerals) {
                                            if (colonyMineral.colonyId === colony.id)
                                            mineralHTML += `<li id="mineral--${mineral.id}>${colonyMineral.amount} tons of ${mineral.name}</li>`
                                        }
                                        
                                    }
                                }
                                mineralHTML += "</ul>"
                                
                                
                            }
        
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
