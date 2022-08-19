import { getTransientState, getFacilities, getMinerals } from "./database.js"
let transientState = getTransientState()
const facilities = getFacilities()
const minerals = getMinerals()

const cartFacility = (transObj) => {

    if (transObj.selectedMineral) {
        for (const facility of facilities) {
            if (facility.id === transObj.selectedFacility) {
                return facility.name
            }
        }
    }
}
//! MAKE THE PURCHASE MINERAL BUTTON DO SOMETHING.

const cartMineral = (transObj) => {

    if (transObj.selectedMineral) {
        for (const mineral of minerals) {
            if (transObj.selectedMineral === mineral.id) {
                return mineral.name
            }
        }
    }
}


export const SpaceCart = () => {
    let html = ""
    if (transientState.selectedMineral) {
        let foundFacility = cartFacility(transientState)
        let foundMineral = cartMineral(transientState)
        html += `<div class="cart">1 ton of ${foundMineral} from ${foundFacility}</div>`

    }
    return html
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