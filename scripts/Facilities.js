import { getFacilities, getGovernors, getTransientState, setFacility } from "./database.js"
let transientState = getTransientState()

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
        (facility) => { //* iterate through the database.facility
            if (facility.active) { //* if the facility has active: true
                if (transientState.selectedFacility === facility.id) { //& and if the user has selected a facility already
                    return `<option selected value="${facility.id}">${facility.name}</option>` //? it rerenders html with the SELECTED item
                } else { //& if the user has not yet selected a facility, then start at the top of the list. 
                    return `<option value="${facility.id}">${facility.name}</option>`
                }
                //return `<option value="${facility.id}" ${transientState.selectedFacility ? "selected" : ""}>${facility.name}</option>`
                //^ second interpolation checks for selectedFacility. after the "?", if true, add the selected string, if false, add after the colon, NOTHING. 
                //! this is called a ternary operator. line 27 does all the work of lines 22-26
            }
        }
    )


    html += arrayOfOptions.join("")
    html += "</select>"
    return html

}
