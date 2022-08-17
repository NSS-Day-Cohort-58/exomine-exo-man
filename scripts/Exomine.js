
import { Facilities } from "./Facilities.js"
import { Governors } from "./Governors.js"
let theGovernors = Governors()
let theColony = "Colony"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("orderButton")) {
            addCustomOrder()
        }
    }
)

export const Exomine = () => {
    return `
        <h1>Solar System Mining Marketplace</h1>

        <article class="choices">
            <section class="choices__governors options">
              ${theGovernors}
            </section>
                <div id="Colony Name">
                    <p><h2>${theColony} Minerals</h2></p>    
                </div>
        <section class="choices__facilities options">
    ${Facilities()}  
  </section>
  
</article>
<aside class="selected_minerals>

</aside>

<article class="facilityMinerals">

 
  
</article>

<article>
  <button id="orderButton">Purchase Mineral</button>
  <button id="orderButton">Purchase All Minerals</button>
</article>`
}