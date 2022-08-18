
import { Colonies, colonySupply } from "./Colonies.js"
import { purchaseMineral } from "./database.js"
import { Facilities } from "./Facilities.js"
import { Governors } from "./Governors.js"
import { Minerals } from "./Minerals.js"
import { SpaceCart } from "./SpaceCart.js"




document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("orderButton")) {
            purchaseMineral()
        }
    }
)

export const Exomine = () => {
    return `
        <h1>Solar System Mining Marketplace</h1>

        <article class="choices">
            <section class="choices__governors options">
                ${Governors()}
            </section>
            <section class="colony">
                ${Colonies()}
                ${colonySupply()}   
            </section>   
            <section class="choices__facilities options">
                ${Facilities()}  
            </section>
  
</article>
<aside class="selected_minerals">
${Minerals()}
</aside>

        <article class="facilityMinerals">
        </article>

        <article>
            <h2 class="header">Space Cart</h2>
            ${SpaceCart()}
            <button id="orderButton">Purchase Mineral</button>
        
        </article>`
}