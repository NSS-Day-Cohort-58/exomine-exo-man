import { getGovernors, setGovernor, setColony } from "./database.js"
import { getTransientState } from "./database.js"
let transientState = getTransientState()

const governors = getGovernors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "governor") {
            setGovernor(parseInt(changeEvent.target.value))
            
        }
    }
)

export const Governors = () => {
    let html = "<h2>Choose Governor</h2>"
    html += '<select id="governor">'
    html += '<option value="0">Select a Governor</option>'
    const arrayOfOptions = governors.map(
        (governor) => {
            if (governor.active) {
                if (transientState.selectedGovernor === governor.id) {
                    setColony(governor.colonyId)
                    return `<option selected value="${governor.id}">${governor.name} </option>`
                } else {
                    return `<option value="${governor.id}">${governor.name}</option>`
                }
            }
        }
    )
    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
