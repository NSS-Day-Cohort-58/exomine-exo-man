import { getMinerals, setMineral } from "./database.js"

const minerals = getMinerals()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setSize(parseInt(event.target.value))
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
        (mineral) => {
            return `<li>
                <input type="radio" name="mineral" value="${mineral.id}" /> ${mineral.name}
            </li>`
        })

    html += listItems.join("")
    html += "</ul>"

    return html
}