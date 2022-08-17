
import { getFacilities, getGovernors, setColony, setFacility } from "./database.js"
let governors = getGovernors()
const facilities = getFacilities()
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "facility") {
            setFacility(parseInt(changeEvent.target.value))

        }
    }
)
document.addEventListener(
    "governorChanged",
    (governorEvent) => {
        let g = governorEvent.target.value
        for (const governor of governors) {
            if (g === governor.id) {
                setColony(parseInt(governor.colonyId))
            }
        }
    }
)

export const Facilities = () => {
    let html = "<h2>Choose Facilities</h2>"
    html += '<select id="facility">'
    html += '<option value="0">Select a Facility</option>'
    const arrayOfOptions = facilities.map(
        (facility) => {
            if (facility.active === true) {
                return `<option value="${facility.id}">${facility.name}</option>`
            }
        }
    )
    html += arrayOfOptions.join("")
    html += "</select>"
    return html

}