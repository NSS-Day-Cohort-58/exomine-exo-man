import { getTransientState, getFacilities, getMinerals } from "./database"
const transientState = getTransientState()
const facilities = getFacilities()
const minerals = getMinerals()

const cartFacility = () => {
    if (transientState.selectedFacility) {
        for (const facility of facilities) {
            if (facility.id === transientState.selectedFacility) {
                return facility
            }
        }
    }
}
let foundFacility = cartFacility()

const cartMineral = () => {
    if (transientState.selectedMineral) {
        for (const mineral of minerals) {
            if (transientState.selectedMineral === mineral.id) {
                return mineral
            }
        }
    }
}
let foundMineral = cartMineral()

export const SpaceCart = () => {
    return `<div class="cart--${foundMineral.id}>1 ton of ${foundMineral.name} from ${foundFacility.name}</div>`
}
//space cart module should
//listen for a change in transientState.
//check to see if transientstate.selectedfacility
//loop through facilities, and check if selectedfacility === facility.id
//return facility.
//set output equal to variable 

//facility mineral 
//if transstate.selectedMineral === mineral.id
//return mineral
//set output equal to variable.

//spacecartfinal function should
//return a string that reads "1 ton of mineral.name from facility.name"






// export const SpaceCart = () => {
//     let html = "<ul>"

//     // Use .map() for converting objects to <li> elements
//     const listItems = minerals.map(
//         (mineral) => { //* iterate database.minerals
//             if (transientState.selectedFacility) { //* if the user has selected a facility
//                 for (const minedMineral of minedMinerals) { //* iterate database.minedMinerals
//                     if (minedMineral.facilityId === transientState.selectedFacility) { //? if the mineral came from the right facility
//                         if (minedMineral.mineralId === mineral.id) { //& if the mineral.id matches the mined mineral 
//                             //* then print out all the information gathered. 
//                             if (transientState.selectedMineral === mineral.id) {
//                                 html += `<li id="cart_minerals"${minedMineral.mineralId}" />1 ton of ${mineral.name} for </li>`
//                         }
//                     }
//                 }
//             }
//         }
//     )

//     html += listItems.join("")
//     html += "</ul>"
//     return html
// }