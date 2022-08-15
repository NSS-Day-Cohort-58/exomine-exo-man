import { getFacilities, setFacility } from "./database.js"


const facilities = getFacilities()
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "facility") {
            setFacility(parseInt(changeEvent.target.value))
        }
    }
)

export const Facilities = () => {
    let html = "<h2>Choose Facilities</h2>"

    html += '<select id="facility">'
    html += '<option value="0">Select a Facility</option>'
    
    const arrayOfOptions = facilities.map(
        (facility) => {
            return `<option value="${facility.id}">${facility.name}</option>`
        }
    )
    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}