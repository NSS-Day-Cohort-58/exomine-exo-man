
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

        <article class="colony">
            <section class="choices__governors options">
                ${Governors()}
                </section>
                <aside class="supply">
                ${Colonies()}
                ${colonySupply()}   
                </aside>   
            <br><br>
        </article>
            <section class="choices__facilities options">
                ${Facilities()}  
            </section>
<br><br>
        <article class="facilityMinerals">
            <section class="selected_minerals">
            ${Minerals()}
            </section>
            <article id="SpaceCart"    
                <class="header">
                <h2 aside class="header">Space Cart</h2>
                ${SpaceCart()}<button id="orderButton">Purchase Mineral</button>
                </class>
            </article>
            </aside>
        </article>
`
}