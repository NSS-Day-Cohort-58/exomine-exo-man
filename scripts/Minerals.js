import { getMinedMinerals, getMinerals, getTransientState, setMineral, } from "./database.js"
let transientState = getTransientState()
const minerals = getMinerals()
let minedMinerals = getMinedMinerals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setMineral(parseInt(event.target.value))
        }
    }
)



/*
minerals takes facility for a parameter
*/
export const Minerals = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = minerals.map(
        (mineral) => { //* iterate database.minerals
            if (transientState.selectedFacility) { //* if the user has selected a facility
                for (const minedMineral of minedMinerals) { //* iterate database.minedMinerals
                    if (minedMineral.facilityId === transientState.selectedFacility) { //? if the mineral came from the right facility
                        if (minedMineral.mineralId === mineral.id) { //& if the mineral.id matches the mined mineral 
<<<<<<< HEAD
                            //* then print out all the information gathered.
                            html += `<li>  
=======
                            //* then print out all the information gathered. 
                            if (transientState.selectedMineral === mineral.id) {
                                html += `<li> <input type="radio" name="mineral" checked value="${minedMineral.mineralId}" /> ${minedMineral.amount} tons of ${mineral.name}</li>`
                            } else {
                                html += `<li> 
>>>>>>> main
                                <input type="radio" name="mineral" value="${minedMineral.mineralId}" /> ${minedMineral.amount} tons of ${mineral.name}
                            </li>`}
                        }
                    }
                }
            }
        }
    )

    html += listItems.join("")
    html += "</ul>"
    return html
}
