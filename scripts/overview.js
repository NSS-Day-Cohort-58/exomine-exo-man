/* 
! Governor Module
// Need a dropdown to select governor
// Export get governor from database
// Import to governor module
// Build dropdown of active governors
    // ^ I. Filter out inactive governors    
Facilities function will check transientState to check for governorId 
?   get current transient state, check if it's holding a governor.  
    * If null, do nothing
    ^ If governor id exists, output colony name and any minerals purchased. 
& When governor is selected, choose facility opens

! Facilities Module
TODO Facilites dropdown should NOT populate until a governor is selected
    ^ event listener watches transient state for governor,
    * then runs the dropdown function
// Import facilities from database
// Build dropdown of active facilities
    // Filter out inactive facilities
// User chooses a facility to shop from
    ?Chosen facility will provide radio buttons for mineral selection
        ^ Import minerals for the selected facility from database
            & This checks transient state for facility, then matches available minerals.
        * Generate a list of each mineral and the quantity available for purchase. 
            ^ this list will be radio buttons. 

! Minerals Module
Clicked radio button will add selected mineral to the “shopping cart”
    ? Radio button list generated from transient state above, in facilities. 
        ^ minerals event listener checks transient state for a facility selection.
        * chosen facility then has a selection of minerals to purchase, 
            ! database.minedMinerals 
    & when clicked, the chosen mineral will add 1 ton to the space cart. 
        ^ this will add 1 ton of chosen mineral to transient state shopping cart
    

! Colonies Module
Purchase button will reduce amount of selected material by 1 ton, and add to selected governor’s minerals supply.
    ? moves 1 ton of mineral from shopping cart transient state to purchases object. 
        ^ Save state of new quantity of minerals remaining in facility database
        * Save state of new quantity of minerals purchased in governor database
    * clears the shopping cart TState. Rready to add another mineral. 
*/